import { toast } from "react-toastify";
import { combineInfra } from "../types/typesForm";
import { baseUrl, requestWithToken } from "../utils/requestApi";

export const updateCompliance = async (
  data: any,
  complianceId: string,
  client: string
) => {
  const url = `${baseUrl}compliance/${complianceId}`;
  data.client = client;

  try {
    await requestWithToken.patch(url, {
      ...data,
    });
    toast.success("Sucesso ao criar compliance");
  } catch (err: any) {
    toast.error(
      `Falha ao atualizar Compliance ${err?.response?.data?.errors[0]}`
    );
  }
};

export const postCompliance = async (
  data: combineInfra,
  id: string,
  route?: string
) => {
  const apiUrl = `${baseUrl}${route}`;
  if (!data) return;
  console.log(data);
  data.client = id;
  try {
    await requestWithToken.post(apiUrl, {
      data,
    });
    toast.success("Sucesso ao criar compliance");
  } catch (err: any) {
    toast.error(`Falha ao criar compliance`);
    console.log(err?.response?.data?.errors[0]);
  }
};
