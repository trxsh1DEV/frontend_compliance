import styled from "styled-components";
// import { useEffect, useState } from "preact/hooks";
// import requestWithToken from "../../utils/auth/requestApi";

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
  // const [urlData, setUrlData] = useState<any>({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await requestWithToken.get("/user");
  //       console.log("oi");
  //       setUrlData(response.data);
  //     } catch (err: any) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {true && (
        <ContainerFull>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            // src={urlData.urls.url_grafana}
            src="https://monitoramento.infonova.com.br:3000/dashboards/f/bf0b0d03-fe14-43d0-a972-a43b0c7d5cbc/"
          />
          <HiddenBottomFields />
        </ContainerFull>
      )}
    </>
  );
}
