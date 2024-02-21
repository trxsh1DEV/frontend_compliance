import { useEffect, useState } from "preact/hooks";
import requestWithToken from "../../utils/auth/requestApi";
import styled from "styled-components";

interface UrlData {
  accessToken: string;
}

const ContainerFull = styled.main`
  width: 100%;
  height: 100vh;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface DashboardProps {
  accessToken: string;
}

function Dashboard({ accessToken }: DashboardProps): JSX.Element {
  return (
    <iframe
      width="99%"
      height="100%"
      src={`http://monitoramento.infonova.com.br:3000/public-dashboards/${accessToken}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}

export default function Infrastructure(): JSX.Element {
  const [urlData, setUrlData] = useState<UrlData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestWithToken.get("/features/infrastructure");
        if (response.status >= 200 && response.status < 300) {
          setUrlData(response.data);
        } else {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ContainerFull>
      {loading ? (
        <LoadingMessage>Carregando...</LoadingMessage>
      ) : (
        urlData.length > 0 && <Dashboard accessToken={urlData[0].accessToken} />
      )}
    </ContainerFull>
  );
}
