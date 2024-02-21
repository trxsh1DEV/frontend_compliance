import { useEffect, useState } from "preact/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import requestWithToken from "../../utils/auth/requestApi";
import {
  BottomContainer,
  TopContainer,
  // CenterContainer,
  WrapperGrid,
  ContentGrid,
  MainContainer,
  Bold,
  WrapperAvailable,
  Paragrafh,
  ArticleStyled,
  DivButton,
} from "./styled";

export default function Compliance() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const [compliance, setCompliance] = useState<any>();

  const fetchData = async () => {
    const resCompliance = await requestWithToken.post("compliance/latest", {
      client: id,
    });
    setCompliance(resCompliance.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDetails = (part: string) => {
    navigate(`admin/clients/${id}/details`, {
      state: { data: compliance, part, id },
    });
  };

  if (!compliance) return null;

  return (
    <>
      <MainContainer>
        <TopContainer></TopContainer>
        {/* <CenterContainer>asdas</CenterContainer> */}
        <BottomContainer>
          <h1 style={{ textAlign: "center" }}>
            Pontuação Total -{" "}
            {compliance.totalScore <= 0 ? "N/A" : compliance.totalScore}%
          </h1>
          <WrapperGrid>
            <ContentGrid>
              <h3>Servidores</h3>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.server.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Monitoramento, Hardware, e Sistema
                  operacional.
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.server.description}.
                </Paragrafh>
                <DivButton onClick={() => handleDetails("server")}>
                  Veja mais!
                </DivButton>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h3>Backup</h3>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.backup.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Monitoramento, Hardware, e Sistema
                  operacional.
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.backup.description}.
                </Paragrafh>
                <DivButton onClick={() => handleDetails("backup")}>
                  Veja mais!
                </DivButton>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h3>High Available</h3>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.ha.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Monitoramento, Hardware, e Sistema
                  operacional.
                </WrapperAvailable>
                <Paragrafh>Descrição: {compliance.ha.description}.</Paragrafh>
                <DivButton onClick={() => handleDetails("ha")}>
                  Veja mais!
                </DivButton>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h3>Firewall</h3>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.firewall.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Fabricante, Regras, VPN, IPS, Backup,
                  Monitoramento...
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.firewall.description}.
                </Paragrafh>
                <DivButton onClick={() => handleDetails("firewall")}>
                  Veja mais!
                </DivButton>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h3>Inventário</h3>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.inventory.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Dispositivos (Computadores, notebooks...),
                  Contatos e Agent
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.inventory.description}.
                </Paragrafh>
                <DivButton onClick={() => handleDetails("inventory")}>
                  Veja mais!
                </DivButton>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h3>Segurança</h3>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.security.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Antivírus, Politicas de senha, Auditoria, GPO
                  e LGPD
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.security.description}.
                </Paragrafh>
                <DivButton onClick={() => handleDetails("security")}>
                  Veja mais!
                </DivButton>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h3>Serviços Outsourcing</h3>
              <ArticleStyled>
                Pontuação -{" "}
                <Bold>{compliance.servicesOutsourcing.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? E-mail, File Server, Intranet, ERP, Banco de
                  dados, Servidores...
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.servicesOutsourcing.description}.
                </Paragrafh>
                <DivButton onClick={() => handleDetails("services")}>
                  Veja mais!
                </DivButton>
              </ArticleStyled>
            </ContentGrid>
          </WrapperGrid>
        </BottomContainer>
      </MainContainer>
    </>
  );
}
