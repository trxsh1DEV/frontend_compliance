import { useLocation } from "react-router-dom";
import FormHA from "../Form/FormHA/FormHA";
import FormBackup from "../Form/FormBackup/FormBackup";
import { useState } from "preact/hooks";
import { combineInfra } from "../../types/typesForm";
import FormServer from "../Form/FormServer/FormServer";
// import InfoPanel from "../InfoPanel/InfoPanel";

const DetailsCompliance = () => {
  const [, setFormValues] = useState<combineInfra>();
  const {
    state: { data, part, id },
  } = useLocation();

  let selectedData = {};
  const { _id: complianceId } = data;

  // Adiciona a propriedade 'client' a todos os sub-objetos dentro do objeto
  // Object.values(data).forEach((value: any) => {
  //   if (typeof value === "object" && value !== null && "client" in value) {
  //     value.client = id;
  //   }
  // });

  if (!selectedData) return <div>Nenhum dado encontrado</div>;

  switch (part) {
    case "backup":
      data.backup.client = id;
      selectedData = data.backup;
      return (
        <FormBackup
          data={selectedData}
          setFormValues={setFormValues}
          id={complianceId}
        />
      );
    case "server":
      data.server.client = id;
      selectedData = data.server;
      return (
        <FormServer
          data={selectedData}
          setFormValues={setFormValues}
          id={complianceId}
        />
      );
    case "firewall":
      selectedData = data.firewall;
      break;
    case "ha":
      data.ha.client = id;
      selectedData = data.ha;
      return (
        <FormHA
          data={selectedData}
          setFormValues={setFormValues}
          id={complianceId}
        />
      );
    case "services":
      selectedData = data.servicesOutsourcing;
      break;
    case "inventory":
      selectedData = data.inventory;
      break;
    case "security":
      selectedData = data.security;
      break;
    default:
      break;
  }

  return <div>Problema ao acessar detalhes desse Compliance</div>;
};

export default DetailsCompliance;
