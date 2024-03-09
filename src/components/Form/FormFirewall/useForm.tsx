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
      isEditable: data?.isEditable || false,
      description: data?.description || "",
      enabled: data?.enabled || false,
      nextGeneration: {
        enabled: data?.nextGeneration.enabled || false,
        score: data?.nextGeneration.score || 1,
      },
      troughput: {
        enabled: data?.troughput?.enabled || false,
        score: data?.troughput?.score || 1,
      },
    },
  });

  const haveFirewall = watch("enabled");
  const isEditable = watch("isEditable");
  const fieldsEnabled = watch(["nextGeneration.enabled", "troughput.enabled"]);

  const isEnabled = (n: number) => !fieldsEnabled[n];

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
    isEnabled,
    haveFirewall,
    handlePrevious,
  };
};

export default useFormulary;
