import { useLocation } from "react-router-dom";
import FormHA from "../Form/FormHA/FormHA";
// import InfoPanel from "../InfoPanel/InfoPanel";

const DetailsCompliance = () => {
  const location = useLocation();
  const data = location.state?.data || {};
  const part = location.state?.part || "none";
  // console.log(data);

  let selectedData = null;

  switch (part) {
    case "backup":
      selectedData = data.backup;
      break;
    case "server":
      selectedData = data.server;
      break;
    case "firewall":
      selectedData = data.firewall;
      break;
    case "ha":
      selectedData = data.ha;
      return <FormHA data={selectedData} />;
      break;
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

  if (!selectedData) return null;
  // console.log(selectedData);

  return <>asdsa</>;
};

export default DetailsCompliance;
