import axios from "axios";

export const handleFormSubmit = async (data: any, route?: string) => {
  console.log(data);
  const bodyData = data?.backup;
  const apiUrl = `http://localhost:5421/api/${route}`;

  try {
    const res = await axios.post(apiUrl, {
      client: "65778324d62ba41cad5a18ef",
      bodyData,
    });

    console.log(res.data, res.status);
  } catch (err: any) {
    console.log(err.message);
  }
};
