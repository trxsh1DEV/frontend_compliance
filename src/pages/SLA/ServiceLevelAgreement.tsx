import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import requestWithToken from "../../utils/auth/requestApi";

const ContainerFull = styled.main`
  width: 99%;
  height: 100vh;
`;

export default function ServiceLevelAgreement() {
  const [urlData, setUrlData] = useState<any>(null);

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
  // console.log(`${urlData.urls.url_sla}+&action=embedview`);

  return (
    <>
      {urlData && (
        <ContainerFull>
          <iframe
            // "https://infonovatecnologia-my.sharepoint.com/personal/yago_sousa_infonova_com_br/_layouts/15/embed.aspx?UniqueId=03e16ea0-b1f5-41da-8748-fd3414e25c5e&action=embedview"
            src={`${urlData.urls.url_sla}&action=embedview`}
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            allowFullScreen
            title="pdf_test.pdf"
          ></iframe>
          {/* https://infonovatecnologia-my.sharepoint.com/personal/yago_sousa_infonova_com_br/_layouts/15/embed.aspx?UniqueId=03e16ea0-b1f5-41da-8748-fd3414e25c5e */}
        </ContainerFull>
      )}
    </>
  );
}
