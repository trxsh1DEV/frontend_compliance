import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormularyProps, FormInventoryProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateCompliance } from "../../../services/compliance";
import { schemaInventory } from "../../../utils/Schemas/schemaFormInventory";

interface FieldsFirewall extends Omit<FormularyProps, "data"> {
  data: FormInventoryProps;
}

const useFormulary = ({
  nextStep,
  setFormValues,
  data,
  id: complianceId,
}: FieldsFirewall) => {
  const [formValidate, setFormValidate] = useState(false);

  const handleFormSubmit = async (data: any) => {
    setFormValidate(true);
    data = {
      inventory: { ...data },
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
  } = useForm<FormInventoryProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schemaInventory),
    defaultValues: {
      agentInventory: data?.agentInventory || "None",
      contacts: data?.contacts || false,
      description: data?.description || "",
      devices: data?.devices?.length > 3 ? data.devices : ["Nenhum"],
      enabled: data?.enabled || false,
      isEditable: data?.isEditable || false,
      score: data?.score || 0,
    },
  });

  const haveInventory = watch("enabled");
  const isEditable = watch("isEditable");

  useEffect(() => {
    setFocus("contacts");
  }, [haveInventory]);

  const handleNext = () => {
    nextStep && nextStep();
  };

  useEffect(() => {
    if (!haveInventory || Object.keys(errors).length === 0) {
      return setFormValidate(true);
    }
    setFormValidate(false);
  }, [errors, haveInventory]);

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    formValidate,
    control,
    isEditable,
    haveInventory,
  };
};

export default useFormulary;
