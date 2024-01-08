import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormularyProps, FormFirewallProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateCompliance } from "../../../services/compliance";
import { schemaFirewall } from "../../../utils/Schemas/schemaFormFirewall";

// type TypesHA = FormHAProps & {
//   ha: {
//     client: string;
//   };
// };

interface FieldsFirewall extends Omit<FormularyProps, "data"> {
  data: FormFirewallProps;
}

const useFormulary = ({
  nextStep,
  setFormValues,
  data,
  id: complianceId,
}: FieldsFirewall) => {
  const [formValidate, setFormValidate] = useState(false);

  // const refFocus = useRef<HTMLInputElement>(null);

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
      manufacturer: data?.manufacturer.length > 0 ? data.manufacturer : "None",
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
    setFocus("enabled");
  }, []);

  const handleNext = () => {
    nextStep && nextStep();
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
  };
};

export default useFormulary;
