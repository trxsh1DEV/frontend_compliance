import { useLocation } from "react-router-dom";
import FormHA from "../Form/FormHA/FormHA";
import FormBackup from "../Form/FormBackup/FormBackup";
import { useState } from "preact/hooks";
import { combineInfra } from "../../types/typesForm";
import FormServer from "../Form/FormServer/FormServer";
// import InfoPanel from "../InfoPanel/InfoPanel";

const DetailsCompliance = () => {
  const [, setFormValues] = useState<combineInfra>();
  const location = useLocation();
  const data = location.state?.data || {};
  const part = location.state?.part || "none";
  // console.log(data);

  let selectedData = {};
  switch (part) {
    case "backup":
      selectedData = data.backup;
      return <FormBackup data={selectedData} setFormValues={setFormValues} />;
    case "server":
      selectedData = data.server;
      return <FormServer data={selectedData} setFormValues={setFormValues} />;
    case "firewall":
      selectedData = data.firewall;
      break;
    case "ha":
      selectedData = data.ha;
      return <FormHA data={selectedData} setFormValues={setFormValues} />;
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

  if (!selectedData) return <div>Nenhum dado encontrado</div>;
};

export default DetailsCompliance;
