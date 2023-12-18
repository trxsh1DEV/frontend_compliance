// Component Success
import { combineInfra } from "../types/typesForm";
import { calledApi } from "../utils/requestApi";

const Success = ({ infra }: { infra: combineInfra }) => {
  if (infra) {
    calledApi(infra, "compliance");
  }
  return <>Success</>;
};

export default Success;
