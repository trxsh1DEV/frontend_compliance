// Component Success
import { combineInfra } from "../types/typesForm";

const Success = ({ infra }: { infra: combineInfra }) => {
  if (infra) {
    console.log(infra);
  }
  return <>Success</>;
};

export default Success;
