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
      documentedRules: {
        enabled: data?.documentedRules?.enabled || false,
        score: data?.documentedRules?.score || 1,
      },
      failOver: {
        enabled: data?.failOver?.enabled || false,
        score: data?.failOver?.score || 1,
      },
      loadBalance: {
        enabled: data?.loadBalance?.enabled || false,
        score: data?.loadBalance?.score || 1,
      },
      highAvailability: {
        enabled: data?.highAvailability?.enabled || false,
        score: data?.highAvailability?.score || 1,
      },
      monitoring: {
        enabled: data?.monitoring?.enabled || false,
        score: data?.monitoring?.score || 1,
      },
      links: {
        qtde: data?.links?.qtde || 1,
        score: data?.links?.score || 1,
      },
      vpn: {
        enabled: data?.vpn?.enabled || false,
        score: data?.vpn?.score || 1,
      },
      license: {
        expired_at:
          data?.license?.expired_at || new Date().toLocaleDateString("en-CA"),
        score: data?.license?.score || 1,
      },
    },
  });

  const haveFirewall = watch("enabled");
  const isEditable = watch("isEditable");
  const fieldsEnabled = watch([
    "nextGeneration.enabled",
    "troughput.enabled",
    "documentedRules.enabled",
    "failOver.enabled",
    "loadBalance.enabled",
    "highAvailability.enabled",
    "monitoring.enabled",
    "vpn.enabled",
  ]);

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

  console.log(errors);

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
