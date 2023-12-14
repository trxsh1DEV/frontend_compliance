import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaServer } from "../../../utils/Schemas/schemaFormServer";
import { FormServerProps } from "../../../types/typesForm";
import { useState } from "react";
import { calledApi } from "../../../utils/requestApi";

interface FormularyProps {
  nextStep: () => void;
}

const useFormulary = ({ nextStep }: FormularyProps) => {
  const [formValidate, setFormValidate] = useState(false);

  const handleFormSubmit = async (data: any) => {
    const bodyData = data;
    console.log(data);
    setFormValidate(true);

    try {
      DataForm(bodyData);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormServerProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schemaServer),
    // defaultValues: DefaultValuesBackup,
  });

  const haveServer = watch("server.enabled");
  const servers = watch([`server.servers.0`]);

  // const test = (n?: number) => {
  //   const servers = watch([`server`]);
  //   return servers.map((item) => item);
  //   // return monitoringEnable. ? "" : { cursor: "not-allowed" };
  // };

  const handleNext = () => {
    nextStep();
  };

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    errors,
    handleNext,
    haveServer,
    formValidate,
    servers,
  };
};

const DataForm = (data: any) => {
  // const ha = {
  //   ha: {
  //     enabled: true,
  //     solutions: ["load balance", "cluster", "failover"],
  //     tested: true,
  //     rto: 24,
  //     score: 5,
  //   },
  // };
  // const server = {
  //   server: {
  //     enabled: true,
  //     servers: [
  //       {
  //         server_name: "Server 1",
  //         systemOperation: {
  //           patching: "Regular",
  //           score: 5,
  //           weight: 3,
  //         },
  //         config: {
  //           value: "low",
  //           score: 7,
  //         },
  //         monitoringPerformance: {
  //           enabled: true,
  //           score: 4,
  //         },
  //         score: 5,
  //         description: "Descrição do servidor",
  //       },
  //     ],
  //   },
  // };
  const allData = {
    client: "657a021673b480d28f63e6ea",
    ...data,
  };
  calledApi(allData, "compliance");
};

export default useFormulary;
