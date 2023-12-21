import axios from "axios";
import Cookie from "js-cookie";
import { combineInfra } from "../types/typesForm";

export const calledApi = async (data: combineInfra, route?: string) => {
  const apiUrl = `http://localhost:5421/api/${route}`;
  if (!data) return;
  data.client = "657368d6d908967cdbabc46e" ?? data.client;

  try {
    const res = await axios.post(apiUrl, {
      data,
    });
    console.log(res.status);
    console.log(res.data);
    // console.log(res.headers);
  } catch (err: any) {
    console.log(err.message);
  }
};

const baseUrl = "http://localhost:5421/api/";

// export const requestCommom = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const requestWithToken = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookie.get("token")}`,
  },
});
