import axios from "axios";
import { combineInfra } from "../types/typesForm";

export const calledApi = async (data: combineInfra, route?: string) => {
  const apiUrl = `http://localhost:5421/api/${route}`;
  if (!data) return;
  data.clientId = "657368d6d908967cdbabc46e" ?? data.clientId;

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
