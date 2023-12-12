import axios from "axios";
import { FormDataProps } from "../../types/typesForm";

export const handleSubmitFormulary = async (
  data: FormDataProps,
  setFormValidated: any,
  setData: any
) => {
  alert("Dados validados com sucesso");

  setData(data);
  setFormValidated(true);
  const backup = data.backup;

  try {
    const res = await axios.post("http://localhost:5421/api/compliance", {
      client: "65778324d62ba41cad5a18ef",
      backup,
    });

    console.log(res.data, res.status);
  } catch (err: any) {
    console.log(err.message);
  }
};
