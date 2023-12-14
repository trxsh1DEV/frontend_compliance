import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  DefaultValuesBackup,
  schemaBackup,
} from "../../../utils/Schemas/schemaFormBackup";
import { FormBackupProps } from "../../../types/typesForm";
import { useState } from "react";

interface FormularyProps {
  nextStep: () => void;
  setFormValues: any;
}

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
    formState: { errors },
  } = useForm<FormBackupProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schemaBackup),
    defaultValues: DefaultValuesBackup,
  });

  // const isEnabled = watch('backup.frequ');
  const isEnabled = watch([
    "backup.frequency.enabled",
    "backup.policy.enabled",
    "backup.restoration.enabled",
    "backup.storage.local.enabled",
    "backup.storage.remote.enabled",
  ]);
  const handleNext = () => {
    nextStep();
  };

  const test = (n: number) => {
    return isEnabled[n] ? "" : { cursor: "not-allowed" };
  };

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    test,
    formValidate,
  };
};

export default useFormulary;
