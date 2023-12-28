import { requestWithToken } from "../utils/requestApi";

export const requestUsers = (id: string = "") => {
  const res = requestWithToken.get(`clients/all/${id}`);
  return res;
};

export const signUp = (data: any) => {
  const res = requestWithToken.post("auth/login", data);
  return res;
};
