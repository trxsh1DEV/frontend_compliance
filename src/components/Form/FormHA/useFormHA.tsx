import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaHA } from "../../../utils/Schemas/schemaFormHA";
import { FormularyProps, FormHAProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";

const useFormulary = ({ nextStep, setFormValues }: FormularyProps) => {
  const [formValidate, setFormValidate] = useState(false);
  // const refFocus = useRef<HTMLInputElement>(null);

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
        solutions: ["none"],
        tested: false,
      },
    },
  });

  const tested = watch("ha.tested");
  const haveHA = watch("ha.enabled");

  const handleNext = () => {
    nextStep();
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
  // }, [haveHA]);

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
  };
};

export default useFormulary;
