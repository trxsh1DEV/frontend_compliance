import axios from "axios";

export const calledApi = async (data: any, route?: string) => {
  // console.log(data);

  const apiUrl = `http://localhost:5421/api/${route}`;

  try {
    // const res = await axios.post(apiUrl, unifiedData);
    // console.log(res.status);
  } catch (err: any) {
    console.log(err.message);
  }
};
