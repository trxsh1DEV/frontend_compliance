import { toast } from "react-toastify";
import requestWithToken from "../auth/requestApi";

export const handleCalculate = async (id: string) => {
  try {
    await requestWithToken.get(`compliance/calculate/${id}`);
    toast.success("Compliance calculado com sucesso!");
  } catch (err: any) {
    console.log(err.message);
    toast.error(
      `Falha ao calcular compliance: ${err?.response?.data?.errors[0]}`
    );
  }
};
