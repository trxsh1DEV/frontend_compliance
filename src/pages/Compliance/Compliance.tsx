import { useEffect, useState } from "preact/hooks";
import { NavLink } from "react-router-dom";
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
  Table,
  Th,
  Td,
} from "./styled";
import GaugeChart from "react-gauge-chart";

export default function Compliance() {
  // const location = useLocation();
  // const id = location.pathname.split("/")[3];
  const [compliance, setCompliance] = useState<any>();

  const fetchData = async () => {
    const resCompliance = await requestWithToken.post("compliance/latest");
    setCompliance(resCompliance.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleDetails = (part: string) => {
  //   console.log(id);
  //   navigate(`admin/clients/${id}/details`, {
  //     state: { data: compliance, part, id },
  //   });
  // };

  if (!compliance) return null;

  return (
    <>
      <MainContainer>
        <TopContainer>
          <div style={{ width: "45%" }}>
            <GaugeChart
              nrOfLevels={30}
              colors={["#FF5F6D", "#7DDA58"]}
              arcWidth={0.3}
              percent={
                compliance.totalScore <= 0 ? 0.65 : compliance.totalScore / 100
              }
            />
            <div
              style={{
                textAlign: "center",
                fontSize: "3rem",
              }}
            >
              650/1000 pontos
            </div>
          </div>
          <div>
            <Table>
              <thead>
                <tr>
                  <Th>Ação a ser melhorada</Th>
                  <Th>Relevância</Th>
                  <Th>Pontuação Atual</Th>
                  <Th>Categoria</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>VPN</Td>
                  <Td>Média</Td>
                  <Td>Baixa</Td>
                  <Td>Firewall</Td>
                </tr>
                <tr>
                  <Td>Memória</Td>
                  <Td>Média</Td>
                  <Td>Baixa</Td>
                  <Td>Servidor</Td>
                </tr>
                <tr>
                  <Td>Backup Remoto</Td>
                  <Td>Alta</Td>
                  <Td>Baixa</Td>
                  <Td>Backup</Td>
                </tr>

                <tr>
                  <Td>Possui antivirus</Td>
                  <Td>Alta</Td>
                  <Td>Baixa</Td>
                  <Td>Segurança da Informação</Td>
                </tr>

                <tr>
                  <Td>Possui antivirus</Td>
                  <Td>Alta</Td>
                  <Td>Baixa</Td>
                  <Td>Segurança da Informação</Td>
                </tr>
                <tr>
                  <Td>Possui antivirus</Td>
                  <Td>Alta</Td>
                  <Td>Baixa</Td>
                  <Td>Segurança da Informação</Td>
                </tr>
                <tr>
                  <Td>Possui antivirus</Td>
                  <Td>Alta</Td>
                  <Td>Baixa</Td>
                  <Td>Segurança da Informação</Td>
                </tr>
              </tbody>
            </Table>
            <NavLink>Veja mais possíveis melhorias</NavLink>
          </div>
        </TopContainer>
        {/* <CenterContainer>asdas</CenterContainer> */}
        <BottomContainer>
          <h1 style={{ textAlign: "center" }}>
            Pontuação Total -{" "}
            {compliance.totalScore <= 0 ? 0 : compliance.totalScore}%
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
                <DivButton>Veja mais!</DivButton>
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
                <DivButton>Veja mais!</DivButton>
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
                <DivButton>Veja mais!</DivButton>
              </ArticleStyled>
            </ContentGrid>
            {/* <ContentGrid>
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
                <DivButton>Veja mais!</DivButton>
              </ArticleStyled>
            </ContentGrid> */}
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
                <DivButton>Veja mais!</DivButton>
              </ArticleStyled>
            </ContentGrid>
          </WrapperGrid>
        </BottomContainer>
      </MainContainer>
    </>
  );
}
