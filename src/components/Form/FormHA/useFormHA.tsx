import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaHA } from "../../../utils/Schemas/schemaFormHA";
import { FormularyProps, FormHAProps } from "../../../types/typesForm";
import { useState } from "react";

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
  } = useForm<FormHAProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schemaHA),
  });

  const tested = watch("ha.tested");
  const haveHA = watch("ha.enabled");

  const handleNext = () => {
    nextStep();
  };

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    haveHA,
    formValidate,
    tested,
  };
};

export default useFormulary;
