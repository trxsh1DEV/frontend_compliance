import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormularyProps, FormSecurityProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateCompliance } from "../../../services/compliance";
import { schemaSecurity } from "../../../utils/Schemas/schemaFormSecurity";

interface FieldsSecurity extends Omit<FormularyProps, "data"> {
  data: FormSecurityProps;
}

const useFormulary = ({
  nextStep,
  setFormValues,
  data,
  id: complianceId,
}: FieldsSecurity) => {
  const [formValidate, setFormValidate] = useState(false);

  const handleFormSubmit = async (data: any) => {
    setFormValidate(true);
    data = {
      security: { ...data },
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
  } = useForm<FormSecurityProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schemaSecurity),
    defaultValues: {
      accessAuditing: data?.accessAuditing || false,
      antivirus: data?.antivirus || "None",
      gpo: data?.gpo || "Nenhuma",
      lgpd: data?.lgpd || false,
      policyPassword: data?.policyPassword || false,
      description: data?.description || "",
      enabled: data?.enabled || false,
      isEditable: data?.isEditable || false,
      score: data?.score || 0,
    },
  });

  const haveSecurity = watch("enabled");
  const isEditable = watch("isEditable");

  useEffect(() => {
    setFocus("description");
  }, [haveSecurity]);

  const handleNext = () => {
    nextStep && nextStep();
  };

  useEffect(() => {
    if (!haveSecurity || Object.keys(errors).length === 0) {
      return setFormValidate(true);
    }
    setFormValidate(false);
  }, [errors, haveSecurity]);

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    formValidate,
    control,
    isEditable,
    haveSecurity,
  };
};

export default useFormulary;
