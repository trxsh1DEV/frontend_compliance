import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { schemaServer } from "../../../utils/Schemas/schemaFormServer";
import { FormServerProps, FormularyProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";

const useFormulary = ({ nextStep, setFormValues }: FormularyProps) => {
  const [formValidate, setFormValidate] = useState(false);

  const handleFormSubmit = async (data: any) => {
    setFormValidate(true);

    try {
      setFormValues((prevState: any) => ({
        ...prevState,
        ...data,
      }));
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormServerProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schemaServer),
    // defaultValues: DefaultValuesBackup,
  });

  const haveServer = watch("server.enabled");

  useEffect(() => {
    if (!haveServer || Object.keys(errors).length === 0) {
      return setFormValidate(true);
    }
    setFormValidate(false);
  }, [errors, haveServer]);

  const { fields, append, remove } = useFieldArray({
    name: "server.servers",
    control,
  });

  const handleNext = () => {
    nextStep();
  };

  const monitoringServer = (n: number) => {
    const servers = watch("server.servers");
    const monitoring = servers[n]?.monitoringPerfomance?.enabled;

    useEffect(() => {
      if (!monitoring) {
        setValue(`server.servers.${n}.monitoringPerfomance.score`, 0);
      }
    }, [monitoring, n, setValue]);

    return monitoring;
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
