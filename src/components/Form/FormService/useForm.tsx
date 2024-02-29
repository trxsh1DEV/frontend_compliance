import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormularyProps, FormServiceProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateCompliance } from "../../../services/compliance";
import { schemaServices } from "../../../utils/Schemas/schemaFormService";

interface FieldsSecurity extends Omit<FormularyProps, "data"> {
  data: FormServiceProps;
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
      servicesOutsourcing: { ...data },
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
  } = useForm<FormServiceProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schemaServices),
    defaultValues: {
      database: data?.database || false,
      email: data?.email || false,
      erp: data?.erp || false,
      fileserver: data?.fileserver || false,
      intranet: data?.intranet || false,
      servers: data?.servers || false,
      sites: data?.sites || false,
      description: data?.description || "",
      enabled: data?.enabled || false,
      isEditable: data?.isEditable || false,
      score: data?.score || 0,
    },
  });

  const haveServices = watch("enabled");
  const isEditable = watch("isEditable");

  useEffect(() => {
    setFocus("servers");
  }, [haveServices]);

  const handleNext = () => {
    nextStep && nextStep();
  };

  const handlePrevious = () => {
    previousStep && previousStep();
  };

  useEffect(() => {
    if (!haveServices || Object.keys(errors).length === 0) {
      return setFormValidate(true);
    }
    setFormValidate(false);
  }, [errors, haveServices]);

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
    haveServices,
  };
};

export default useFormulary;
