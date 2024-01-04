// Component Success
import { postCompliance } from "../../services/compliance";
import { combineInfra } from "../../types/typesForm";

const Success = ({ infra, id }: { infra: combineInfra; id: string }) => {
  if (infra && id) {
    postCompliance(infra, id, "compliance");
  }
  return <>Success</>;
};

export default Success;
