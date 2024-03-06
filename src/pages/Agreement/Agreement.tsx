import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import requestWithToken from "../../utils/auth/requestApi";

const ContainerFull = styled.main`
  width: 99%;
  height: 100vh;
`;

export default function Agreement() {
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
  // console.log(urlData.urls.url_agreement);

  return (
    <>
      {urlData && (
        <ContainerFull>
          <iframe
            src={`${urlData.urls.url_agreement}&action=embedview`}
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            allowFullScreen
            title="pdf_test.pdf"
          ></iframe>
        </ContainerFull>
      )}
    </>
  );
}
