import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import requestWithToken from "../../utils/auth/requestApi";

const ContainerFull = styled.main`
  width: 99%;
  height: 100vh;
`;

export default function Inventory() {
  const [urlData, setUrlData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await requestWithToken.get("/user");
        setUrlData(response.data);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {urlData && (
        <ContainerFull>
          <iframe
            width="100%"
            height="100%"
            src={urlData.urls.url_inventory}
            frameborder="0"
            style="border:0"
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </ContainerFull>
      )}
    </>
  );
}
