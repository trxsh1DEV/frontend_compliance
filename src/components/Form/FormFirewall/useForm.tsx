import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormularyProps, FormFirewallProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateCompliance } from "../../../services/compliance";
import { schemaFirewall } from "../../../utils/Schemas/schemaFormFirewall";

interface FieldsFirewall extends Omit<FormularyProps, "data"> {
  data: FormFirewallProps;
}

const useFormulary = ({
  nextStep,
  setFormValues,
  previousStep,
  data,
  id: complianceId,
}: FieldsFirewall) => {
  const [formValidate, setFormValidate] = useState(false);

  const handleFormSubmit = async (data: any) => {
    setFormValidate(true);
    data = {
      firewall: { ...data },
    };

    try {
      if (data && complianceId) {
        updateCompliance(data, complianceId, data.client);
        return;
      }

      setFormValues((prevState: any) => ({
        ...prevState,
        ...data,
      }));
    } catch (err: any) {
      toast.error(`Ocorreu um erro: ${err.message}`);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setFocus,
  } = useForm<FormFirewallProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schemaFirewall),
    defaultValues: {
      manufacturer: data?.manufacturer.length > 1 ? data.manufacturer : "None",
      rules: data?.rules || "None",
      vpn: data?.vpn || "None",
      isEditable: data?.isEditable || false,
      score: data?.score || 0,
      backup: data?.backup || false,
      description: data?.description || "",
      enabled: data?.enabled || false,
      ips: data?.ips || false,
      monitoring: data?.monitoring || false,
      restoration: data?.restoration || false,
      segmentation: data?.restoration || false,
    },
  });

  const haveFirewall = watch("enabled");
  const isEditable = watch("isEditable");

  useEffect(() => {
    setFocus("description");
  }, [haveFirewall]);

  const handleNext = () => {
    nextStep && nextStep();
  };

  const handlePrevious = () => {
    previousStep && previousStep();
  };

  useEffect(() => {
    if (!haveFirewall || Object.keys(errors).length === 0) {
      return setFormValidate(true);
    }
    setFormValidate(false);
  }, [errors, haveFirewall]);

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    formValidate,
    control,
    isEditable,
    haveFirewall,
    handlePrevious,
  };
};

export default useFormulary;
