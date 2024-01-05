import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { schemaServer } from "../../../utils/Schemas/schemaFormServer";
import { FormServerProps, FormularyProps } from "../../../types/typesForm";
import { useEffect, useState } from "react";
import { updateCompliance } from "../../../services/compliance";

type TypesServer = FormServerProps & {
  server: {
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
  const datas: TypesServer = { server: { ...data } };

  const handleFormSubmit = async (data: any) => {
    setFormValidate(true);

    try {
      if (datas && complianceId) {
        updateCompliance(data, complianceId, datas.server.client);
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
    control,
    setValue,
    formState: { errors },
  } = useForm<FormServerProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schemaServer),

    defaultValues: {
      server: {
        servers: datas?.server?.servers?.map((item) => {
          return {
            config: {
              level: item?.config?.level || "low",
              score: item?.config?.score || 0,
            },
            monitoringPerformance: {
              enabled: item?.monitoringPerformance?.enabled || false,
              score: item?.monitoringPerformance?.score || 0,
            },
            score: item?.score || 0,
            serverName: item?.serverName || "",
            systemOperation: {
              patching: item?.systemOperation?.patching || "Irregular",
              score: item?.systemOperation?.score || 0,
            },
            description: item?.description || "",
          };
        }),
        description: datas?.server?.description || "",
        enabled: datas?.server?.enabled || false,
        isEditable: false,
      },
    },
  });

  const haveServer = watch("server.enabled");
  const isEditable = watch("server.isEditable");

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

  const monitoringServer = (n: number) => {
    const servers = watch("server.servers");
    const monitoring = servers[n]?.monitoringPerformance?.enabled;

    useEffect(() => {
      if (!monitoring) {
        setValue(`server.servers.${n}.monitoringPerformance.score`, 0);
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
    isEditable,
  };
};

export default useFormulary;
