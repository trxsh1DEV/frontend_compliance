// Component Success
import { combineInfra } from "../../types/typesForm";
import { calledApi } from "../../utils/requestApi";

const Success = ({ infra, id }: { infra: combineInfra; id: string }) => {
  if (infra && id) {
    calledApi(infra, id, "compliance");
  }
  return <>Success</>;
};

export default Success;
