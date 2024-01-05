import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaHA } from "../../../utils/Schemas/schemaFormHA";
import { FormularyProps, FormHAProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateCompliance } from "../../../services/compliance";

type TypesHA = FormHAProps & {
  ha: {
    client: string; // Adicionando a propriedade client dentro do objeto ha
  };
};

const useFormulary = ({
  nextStep,
  setFormValues,
  data,
  id: complianceId,
}: FormularyProps) => {
  const [formValidate, setFormValidate] = useState(false);
  const datas: TypesHA = { ha: { ...data } };

  // const refFocus = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (data: any) => {
    setFormValidate(true);

    try {
      if (datas && complianceId) {
        updateCompliance(data, complianceId, datas.ha.client);
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
    setValue,
    formState: { errors },
  } = useForm<FormHAProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schemaHA),
    defaultValues: {
      // Setar os valores padrão caso exista "data", serve para saber quando o formulário é só para visualização ou para criação
      ha: {
        enabled: datas?.ha?.enabled || false,
        rto: datas?.ha?.rto || 0,
        score: datas?.ha?.score || 0,
        description: datas.ha.description || "",
        solutions: datas?.ha?.solutions || ["none"],
        tested: datas?.ha?.tested || false,
        isEditable: false,
      },
    },
  });

  const tested = watch("ha.tested");
  const haveHA = watch("ha.enabled");
  const isEditable = watch("ha.isEditable");

  const handleNext = () => {
    nextStep && nextStep();
  };

  useEffect(() => {
    if (!haveHA || Object.keys(errors).length === 0) {
      return setFormValidate(true);
    }
    setFormValidate(false);
  }, [errors, haveHA]);

  useEffect(() => {
    !tested && setValue("ha.rto", 0);
  }, [setValue, tested]);

  // useEffect(() => {
  //   if (haveHA) {
  //     refFocus.current?.focus();
  //   }
  // }, [haveHA, isEditable]);

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    haveHA,
    formValidate,
    tested,
    control,
    isEditable,
    // refFocus,
  };
};

export default useFormulary;
