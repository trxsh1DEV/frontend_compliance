import { useState, useEffect } from "react";
import requestWithToken from "../../utils/auth/requestApi";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestWithToken.get("/auth/test"); // Usa diretamente a instância de api
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {data && <div>sucesso</div>}
    </div>
  );
}
