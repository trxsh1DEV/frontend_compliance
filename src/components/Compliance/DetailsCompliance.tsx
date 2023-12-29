import { useLocation } from "react-router-dom";
import InfoPanel from "../InfoPanel/InfoPanel"; // Certifique-se de ajustar o caminho do import conforme necessário

const DetailsCompliance = () => {
  const location = useLocation();
  const data = location.state?.data || {};
  const part = location.state?.part || "none";

  let selectedData = null;

  switch (part) {
    case "backup":
      selectedData = data.backup;
      break;
    case "server":
      selectedData = data.server;
      break;
    // Adicione mais casos conforme necessário para outras partes
    default:
      break;
  }

  if (!selectedData) return null;

  return <InfoPanel data={selectedData} />;
};

export default DetailsCompliance;
