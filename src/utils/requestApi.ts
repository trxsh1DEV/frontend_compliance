import axios from "axios";
import Cookies from "js-cookie";
import { combineInfra } from "../types/typesForm";
import { toast } from "react-toastify";

export const calledApi = async (
  data: combineInfra,
  id: string,
  route?: string
) => {
  const apiUrl = `http://localhost:5421/api/${route}`;
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

const baseUrl = "http://localhost:5421/api/";

export const requestUserToken = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const requestWithToken = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});
