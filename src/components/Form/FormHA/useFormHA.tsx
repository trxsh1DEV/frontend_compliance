import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaHA } from "../../../utils/Schemas/schemaFormHA";
import { FormularyProps, FormHAProps } from "../../../types/typesForm";
import { useEffect, useRef, useState } from "react";

const useFormulary = ({ nextStep, setFormValues }: FormularyProps) => {
  const [formValidate, setFormValidate] = useState(false);
  const refFocus = useRef<HTMLInputElement>(null);

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
    defaultValues: {
      ha: {
        enabled: false,
        rto: 0,
        score: 0,
        description: "",
        solutions: "none",
        tested: true,
      },
    },
  });

  const tested = watch("ha.tested");
  const haveHA = watch("ha.enabled");

  const handleNext = () => {
    nextStep();
  };

  useEffect(() => {
    if (!haveHA) {
      setFormValidate(true);
      return;
    } else if (Object.keys(errors).length === 0) {
      setFormValidate(true);
      return;
    }
    setFormValidate(false);
  }, [errors]);

  useEffect(() => {
    if (haveHA) {
      // Defina o foco no input após a renderização inicial
      refFocus.current?.focus();
    }
  }, [haveHA]);

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    haveHA,
    formValidate,
    tested,
    refFocus,
  };
};

export default useFormulary;
