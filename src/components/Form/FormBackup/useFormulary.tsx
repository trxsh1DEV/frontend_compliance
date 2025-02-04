import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaBackup } from "../../../utils/Schemas/schemaFormBackup";
import { FormBackupProps, FormularyProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";
import { updateCompliance } from "../../../services/compliance";

type TypesBackup = FormBackupProps & {
  backup: {
    client: string; // Adicionando a propriedade client dentro do objeto ha
  };
};

const useFormulary = ({
  nextStep,
  setFormValues,
  previousStep,
  data,
  id: complianceId,
}: FormularyProps) => {
  const [formValidate, setFormValidate] = useState(false);

  const datas: TypesBackup = { backup: { ...data } };

  const handleFormSubmit = async (data: any) => {
    console.log(data);
    setFormValidate(true);

    try {
      if (datas && complianceId) {
        updateCompliance(data, complianceId, datas.backup.client);
        return;
      }

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
    control,
    formState: { errors },
  } = useForm<FormBackupProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schemaBackup),
    defaultValues: {
      backup: {
        storage: {
          local: {
            enabled: datas?.backup?.storage?.local?.enabled || false,
            qtde: datas?.backup?.storage?.local?.qtde || 0,
            score: datas?.backup?.storage?.local?.score || 0,
          },
          remote: {
            enabled: datas?.backup?.storage?.remote?.enabled || false,
            qtde: datas?.backup?.storage?.remote?.qtde || 0,
            score: datas?.backup?.storage?.remote?.score || 0,
          },
        },
        enabled: datas?.backup?.enabled || false,
        isEditable: false,
      },
    },
  });

  // const isEnabled = watch('backup.frequ');
  const fieldsEnabled = watch([
    "backup.storage.local.enabled",
    "backup.storage.remote.enabled",
    // "backup.frequency.enabled",
    // "backup.policy.enabled",
    // "backup.restoration.enabled",
  ]);
  const haveBackup = watch("backup.enabled");
  const isEditable = watch("backup.isEditable");

  useEffect(() => {
    const resetInput = { score: 0, qtde: 0, enabled: false };

    !fieldsEnabled[0] && setValue("backup.storage.local", resetInput);
    !fieldsEnabled[1] && setValue("backup.storage.remote", resetInput);
  }, [setValue, fieldsEnabled]);

  const handleNext = () => {
    nextStep && nextStep();
  };
  const handlePrevious = () => {
    previousStep && previousStep();
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
    control,
    isEnabled,
    formValidate,
    haveBackup,
    isEditable,
    handlePrevious,
  };
};

export default useFormulary;
