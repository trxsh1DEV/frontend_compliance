import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  DefaultValuesBackup,
  schemaBackup,
} from "../../../utils/Schemas/schemaFormBackup";
import { FormBackupProps, FormularyProps } from "../../../types/typesForm";
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
    setValue,
    formState: { errors },
  } = useForm<FormBackupProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schemaBackup),
    defaultValues: DefaultValuesBackup,
  });

  // const isEnabled = watch('backup.frequ');
  const fieldsEnabled = watch([
    "backup.frequency.enabled",
    "backup.storage.local.enabled",
    "backup.storage.remote.enabled",
    "backup.policy.enabled",
    "backup.restoration.enabled",
  ]);
  const haveBackup = watch("backup.enabled");
  useEffect(() => {
    const resetInput = { score: 0, qtde: 0, description: "", enabled: false };

    !fieldsEnabled[0] &&
      setValue("backup.frequency", {
        description: "",
        enabled: false,
        score: 0,
        level: undefined,
      });
    !fieldsEnabled[1] && setValue("backup.storage.local", resetInput);
    !fieldsEnabled[2] && setValue("backup.storage.remote", resetInput);
    !fieldsEnabled[3] && setValue("backup.policy.score", 0);
    !fieldsEnabled[4] && setValue("backup.restoration.score", 0);
  }, [setValue, fieldsEnabled]);
  const handleNext = () => {
    nextStep();
  };

  const isEnabled = (n: number) => {
    return fieldsEnabled[n] ? "" : { cursor: "not-allowed" };
  };

  useEffect(() => {
    if (!haveBackup || Object.keys(errors).length === 0) {
      return setFormValidate(true);
    }
    setFormValidate(false);
  }, [errors, haveBackup]);

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    isEnabled,
    formValidate,
    haveBackup,
  };
};

export default useFormulary;
