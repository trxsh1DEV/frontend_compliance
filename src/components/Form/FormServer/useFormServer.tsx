import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { schemaServer } from "../../../utils/Schemas/schemaFormServer";
import { FormServerProps, FormularyProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";
import { updateCompliance } from "../../../services/compliance";

interface FieldsServer extends Omit<FormularyProps, "data"> {
  data: FormServerProps;
}

const useFormulary = ({
  nextStep,
  setFormValues,
  previousStep,
  data,
  id: complianceId,
}: FieldsServer) => {
  const [formValidate, setFormValidate] = useState(false);
  // const data: TypesServer = { server: { ...data } };

  const handleFormSubmit = async (data: any) => {
    setFormValidate(true);

    try {
      if (data && complianceId) {
        updateCompliance(data, complianceId, data.server.client);
        return;
      }
      // console.log("oi");

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
    setFocus,
    formState: { errors },
  } = useForm<FormServerProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schemaServer),

    defaultValues: {
      server: {
        servers: data?.server?.servers?.map((item) => {
          return {
            hostname: item?.hostname || {
              label: item?.hostname?.label || "",
              score: item?.hostname?.score || 0,
            },
            memory: item?.memory || {
              size: item?.memory?.size || 0,
              score: item?.memory?.score || 0,
            },
            processor: item?.processor || {
              label: item?.processor?.label || "",
              score: item?.processor?.score || 0,
            },
            storage: item?.storage || {
              qtde: item?.storage?.qtde || 1,
              size: item?.storage?.size || 80,
              score: item?.storage?.score || 0,
            },
            raid: item?.raid || {
              enabled: item?.raid?.enabled || false,
              score: item?.raid?.score || 0,
            },
            cal_access: item?.cal_access || {
              enabled: item?.cal_access?.enabled || false,
              score: item?.cal_access?.score || 0,
            },
            license_so: item?.license_so || {
              enabled: item?.license_so?.enabled || "",
              score: item?.license_so?.score || 0,
            },
            update_so: item?.update_so || {
              enabled: item?.update_so?.enabled || "",
              score: item?.update_so?.score || 0,
            },
            high_availability: item?.high_availability || {
              enabled: item?.high_availability?.enabled || "",
              score: item?.high_availability?.score || 0,
            },
            antivirus: item?.antivirus || {
              enabled: item?.antivirus?.enabled || "",
              score: item?.antivirus?.score || 0,
            },
            backup: item?.backup || {
              enabled: item?.backup?.enabled || "",
              score: item?.backup?.score || 0,
            },
            monitoring: item?.monitoring || {
              enabled: item?.monitoring?.enabled || "",
              score: item?.monitoring?.score || 0,
            },
            warranty: item?.warranty || {
              enabled: item?.warranty?.enabled || "",
              score: item?.warranty?.score || 0,
              expired_at:
                item?.warranty?.expired_at ||
                new Date().toLocaleDateString("en-CA"),
            },
            description: item?.description || "",
          };
        }),
        description: data?.server?.description || "",
        enabled: data?.server?.enabled || false,
        isEditable: false,
      },
    },
  });

  const haveServer = watch("server.enabled");
  const isEditable = watch("server.isEditable");
  const fieldsEnabled = (n: number) => {
    // console.log(watch([`server.servers.${n}.cal_access.enabled`]));
    return watch([
      `server.servers.${n}.raid.enabled`,
      `server.servers.${n}.cal_access.enabled`,
      `server.servers.${n}.license_so.enabled`,
      `server.servers.${n}.update_so.enabled`,
      `server.servers.${n}.high_availability.enabled`,
      `server.servers.${n}.antivirus.enabled`,
      `server.servers.${n}.backup.enabled`,
      `server.servers.${n}.monitoring.enabled`,
      `server.servers.${n}.warranty.enabled`,
    ]);
  };

  const isEnabled = (n: number, index: number) => {
    // console.log(fieldsEnabled(n)[n]);
    return !fieldsEnabled(n)[index];
  };

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
    nextStep && nextStep();
  };

  const handlePrevious = () => {
    previousStep && previousStep();
  };

  const setAutoFocus = (index: number) => {
    setFocus(`server.servers.${index}.hostname.label`);
  };

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    handlePrevious,
    haveServer,
    formValidate,
    isEnabled,
    control,
    setAutoFocus,
    fields,
    append,
    remove,
    isEditable,
  };
};

export default useFormulary;
