import { useEffect, useState } from "preact/hooks";
import { requestWithToken } from "../../utils/requestApi";
import styled from "styled-components";

const ContainerFull = styled.main`
  width: 100%;
  height: 100vh;
`;

const HiddenTopFields = styled.section`
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;
  background-color: #111;
  z-index: 1;
`;

export default function Infrastructure() {
  const [urlSnapshot, setUrlSnapshot] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlData = await requestWithToken.get("/features/infrastructure");
        setUrlSnapshot(urlData.data);
      } catch (err: any) {
        console.log(err.message);
      }
    };

    fetchData();
  });

  return (
    <>
      <HiddenTopFields />
      <ContainerFull>
        {urlSnapshot && (
          <iframe
            width="99%"
            height="100%"
            src={urlSnapshot}
            frameBorder="0"
            allowFullScreen
          />
        )}
      </ContainerFull>
    </>
  );
}
