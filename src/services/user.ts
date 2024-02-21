import requestWithToken from "../utils/auth/requestApi";

export const requestUsers = (id: string = "") => {
  const res = requestWithToken.get(`admin/clients/${id}`);
  return res;
};

export const signUp = (data: any) => {
  const res = requestWithToken.post("auth/login", data);
  return res;
};
