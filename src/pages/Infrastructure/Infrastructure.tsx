import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import requestWithToken from "../../utils/auth/requestApi";

const ContainerFull = styled.main`
  width: 99%;
  height: 100vh;
`;

const HiddenBottomFields = styled.section`
  position: absolute;
  bottom: 0;
  height: 25px;
  width: 100%;
  background-color: #333;
  z-index: 1;
`;

export default function Infrastructure() {
  const [urlData, setUrlData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestWithToken.get("/user");
        console.log("oi");
        setUrlData(response.data);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {urlData?.urls && (
        <ContainerFull>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src={urlData.urls.url_grafana}
          />
          <HiddenBottomFields />
        </ContainerFull>
      )}
    </>
  );
}
