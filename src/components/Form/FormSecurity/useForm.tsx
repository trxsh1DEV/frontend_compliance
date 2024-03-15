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
  previousStep,
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
      antivirus: {
        enabled: data?.antivirus.enabled || false,
        score: data?.antivirus.score || 1,
      },
      firewall: {
        enabled: data?.firewall.enabled || false,
        score: data?.firewall.score || 1,
      },
      policy_password: {
        enabled: data?.policy_password.enabled || false,
        score: data?.policy_password.score || 1,
      },
      identity_management: {
        enabled: data?.identity_management.enabled || false,
        score: data?.identity_management.score || 1,
      },

      mfa: {
        enabled: data?.mfa.enabled || false,
        score: data?.mfa.score || 1,
      },
      antispam: {
        enabled: data?.antispam.enabled || false,
        score: data?.antispam.score || 1,
      },
      access_control: {
        enabled: data?.access_control.enabled || false,
        score: data?.access_control.score || 1,
      },
      network_segmentation: {
        enabled: data?.network_segmentation.enabled || false,
        score: data?.network_segmentation.score || 1,
      },
      description: data?.description || "",
      enabled: data?.enabled || false,
      isEditable: data?.isEditable || false,
    },
  });

  const haveSecurity = watch("enabled");
  const isEditable = watch("isEditable");
  const fieldsEnabled = watch([
    "antivirus.enabled",
    "firewall.enabled",
    "policy_password.enabled",
    "identity_management.enabled",
    "mfa.enabled",
    "antispam.enabled",
    "access_control.enabled",
    "network_segmentation.enabled",
  ]);

  const isEnabled = (n: number) => !fieldsEnabled[n];

  useEffect(() => {
    setFocus("description");
  }, [haveSecurity]);

  const handleNext = () => {
    nextStep && nextStep();
  };

  const handlePrevious = () => {
    previousStep && previousStep();
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
    handlePrevious,
    formValidate,
    control,
    isEditable,
    haveSecurity,
    isEnabled,
  };
};

export default useFormulary;
