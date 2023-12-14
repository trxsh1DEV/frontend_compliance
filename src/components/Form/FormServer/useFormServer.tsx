import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { schemaServer } from "../../../utils/Schemas/schemaFormServer";
import { FormServerProps } from "../../../types/typesForm";
import { useState } from "react";
import { DataForm } from "../test";

interface FormularyProps {
  nextStep: () => void;
}

const useFormulary = ({ nextStep }: FormularyProps) => {
  const [formValidate, setFormValidate] = useState(false);

  const handleFormSubmit = async (data: any) => {
    setFormValidate(true);

    try {
      DataForm(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormServerProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schemaServer),
    // defaultValues: DefaultValuesBackup,
  });

  const { fields, append, remove } = useFieldArray({
    name: "server.servers",
    control,
  });

  const haveServer = watch("server.enabled");
  const handleNext = () => {
    nextStep();
  };
  const monitoringServer = (n: number) => {
    const servers = watch("server.servers");
    return servers[n].monitoringPerfomance.enabled;
  };

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    haveServer,
    formValidate,
    fields,
    append,
    remove,
    monitoringServer,
  };
};

export default useFormulary;
