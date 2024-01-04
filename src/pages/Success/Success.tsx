// Component Success
import { combineInfra } from "../../types/typesForm";
import { calledApi } from "../../utils/requestApi";

const Success = ({ infra, id }: { infra: combineInfra; id: string }) => {
  console.log(infra, id);
  if (infra && id) {
    calledApi(infra, id, "compliance");
  }
  return <>Success</>;
};

export default Success;
