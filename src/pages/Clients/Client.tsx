import { useEffect, useState } from "preact/hooks";
import { Link, useLocation } from "react-router-dom";
import { requestWithToken } from "../../utils/requestApi";
import {
  BottomContainer,
  TopContainer,
  CenterContainer,
  WrapperGrid,
  ContentGrid,
  MainContainer,
  Bold,
  WrapperAvailable,
} from "./styled";
import { FormRegisterProps } from "../../types/typesForm";
import { Plus } from "phosphor-react";
import { formatDateString } from "../../utils/formatDate";

export default function Client() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [user, setUser] = useState<FormRegisterProps>();
  const [compliance, setCompliance] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const resUser = requestWithToken.get(`clients/${id}`);
      const resCompliance = requestWithToken.get(`compliance/latest`);
      const [user, compliance] = await Promise.all([resUser, resCompliance]);
      setUser(user.data);
      setCompliance(compliance.data);
    };

    fetchData();
  }, []);

  if (!user || !compliance) return null;
  return (
    <>
      <MainContainer>
        <TopContainer>
          <WrapperGrid>
            <ContentGrid>{user.name}</ContentGrid>
            <ContentGrid>{user.email}</ContentGrid>
            <ContentGrid>{user.social_reason}</ContentGrid>
            <ContentGrid>{formatDateString(user.createdAt)}</ContentGrid>
            <ContentGrid>11 99999-9999</ContentGrid>
            <ContentGrid>Tipo de contrato</ContentGrid>
            <ContentGrid>Próximas melhorias:</ContentGrid>
            <ContentGrid>CNPJ</ContentGrid>
          </WrapperGrid>
        </TopContainer>
        <CenterContainer>asdas</CenterContainer>
        <BottomContainer>
          <h1>Compliance Scores - Total Score - {compliance.totalScore}%</h1>
          <WrapperGrid>
            <ContentGrid>
              <h2>Servidores</h2>
              <article>
                <div>
                  Pontuação -{" "}
                  <Bold>{compliance.server.servers[0].points}%</Bold>
                </div>
                <WrapperAvailable>
                  O que avaliamos? Monitoramento, Hardware, e Sistema
                  operacional.
                </WrapperAvailable>
                <p>OBS: {compliance.server.description}.</p>
                <Link to="/">Veja mais!</Link>
              </article>
            </ContentGrid>
            <ContentGrid>
              <h2>Backup</h2>
              <article>
                <div>
                  Pontuação - <Bold>{compliance.backup.points}%</Bold>
                </div>
                <WrapperAvailable>
                  O que avaliamos? Monitoramento, Hardware, e Sistema
                  operacional.
                </WrapperAvailable>
                <p>OBS: {compliance.backup.description}.</p>
                <Link to="/">Veja mais!</Link>
              </article>
            </ContentGrid>
            <ContentGrid>
              <h2>High Available</h2>
              <article>
                <div>
                  Pontuação - <Bold>{compliance.ha.points}%</Bold>
                </div>
                <WrapperAvailable>
                  O que avaliamos? Monitoramento, Hardware, e Sistema
                  operacional.
                </WrapperAvailable>
                <p>OBS: {compliance.ha.description}.</p>
                <Link to="/">Veja mais!</Link>
              </article>
            </ContentGrid>
          </WrapperGrid>
        </BottomContainer>
        <Link to="/compliance/add" state={{ id: user._id }}>
          <button>
            <Plus />
          </button>
        </Link>
      </MainContainer>
    </>
  );
}
