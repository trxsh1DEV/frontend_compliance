import { DecodedTokenProps } from "../types/typeUsers";
import { requestWithToken } from "../utils/requestApi";
import { jwtDecode } from "jwt-decode";

export const requestUsers = (id: string = "") => {
  const res = requestWithToken.get(`admin/clients/${id}`);
  return res;
};

export const signUp = (data: any) => {
  const res = requestWithToken.post("auth/login", data);
  return res;
};

export const decodedToken = (token: string): DecodedTokenProps | null => {
  try {
    const decoded = jwtDecode(token) as DecodedTokenProps;

    const { isAdmin, id } = decoded;
    return { isAdmin, id };
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return null;
  }
};

export const uploadFile = () => {};
