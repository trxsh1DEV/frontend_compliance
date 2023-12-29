import { useEffect, useState } from "preact/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { requestUserToken, requestWithToken } from "../../utils/requestApi";
import {
  BottomContainer,
  TopContainer,
  CenterContainer,
  WrapperGrid,
  ContentGrid,
  MainContainer,
  Bold,
  WrapperAvailable,
  Paragrafh,
  ArticleStyled,
  StyledLink,
} from "./styled";
import { FormRegisterProps } from "../../types/typesForm";
import { Plus } from "phosphor-react";
import { formatDateString } from "../../utils/formatDate";

export default function Client() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [user, setUser] = useState<FormRegisterProps>();
  const [compliance, setCompliance] = useState<any>();

  const fetchData = async () => {
    const resUser = requestWithToken.get(`clients/${id}`);
    const resCompliance = requestUserToken.post("compliance/latest", {
      client: id,
    });
    const [user, compliance] = await Promise.all([resUser, resCompliance]);
    setUser(user.data);
    setCompliance(compliance.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDetails = (part: string) => {
    navigate(`/clients/${id}/details`, {
      state: { data: compliance, part: part },
    });
  };

  if (!user || !compliance) return null;
  return (
    <>
      <MainContainer>
        <TopContainer>
          <WrapperGrid>
            <ContentGrid>Responsável: {user.name}</ContentGrid>
            <ContentGrid>E-mail: {user.email}</ContentGrid>
            <ContentGrid>Razão S.{user.social_reason}</ContentGrid>
            <ContentGrid>
              Ultima atualização: {formatDateString(user.createdAt)}
            </ContentGrid>
            <ContentGrid>Contato: 11 99999-9999</ContentGrid>
            <ContentGrid>Tipo de contrato: Fixo</ContentGrid>
            <ContentGrid>Problemas Critícos? No</ContentGrid>
            <ContentGrid>CNPJ: 18.518.793/0001-09</ContentGrid>
          </WrapperGrid>
        </TopContainer>
        <CenterContainer>asdas</CenterContainer>
        <BottomContainer>
          <h1 style={{ textAlign: "center" }}>
            Pontuação Total -{" "}
            {compliance.totalScore <= 0 ? "N/A" : compliance.totalScore}%
          </h1>
          <WrapperGrid>
            <ContentGrid>
              <h2>Servidores</h2>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.server.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Monitoramento, Hardware, e Sistema
                  operacional.
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.server.description}.
                </Paragrafh>
                <button onClick={() => handleDetails("server")}>
                  Veja mais!
                </button>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h2>Backup</h2>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.backup.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Monitoramento, Hardware, e Sistema
                  operacional.
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.backup.description}.
                </Paragrafh>
                <button onClick={() => handleDetails("backup")}>
                  Veja mais!
                </button>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h2>High Available</h2>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.ha.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Monitoramento, Hardware, e Sistema
                  operacional.
                </WrapperAvailable>
                <Paragrafh>Descrição: {compliance.ha.description}.</Paragrafh>
                <StyledLink to="/">Veja mais!</StyledLink>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h2>Firewall</h2>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.firewall.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Fabricante, Regras, VPN, IPS, Backup,
                  Monitoramento...
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.firewall.description}.
                </Paragrafh>
                <StyledLink to="/">Veja mais!</StyledLink>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h2>Inventário</h2>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.inventory.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Dispositivos (Computadores, notebooks...),
                  Contatos e Agent
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.inventory.description}.
                </Paragrafh>
                <StyledLink to="/">Veja mais!</StyledLink>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h2>Segurança</h2>
              <ArticleStyled>
                Pontuação - <Bold>{compliance.security.points}%</Bold>
                <WrapperAvailable>
                  O que avaliamos? Antivírus, Politicas de senha, Auditoria, GPO
                  e LGPD
                </WrapperAvailable>
                <Paragrafh>
                  Descrição: {compliance.security.description}.
                </Paragrafh>
                <StyledLink to="/">Veja mais!</StyledLink>
              </ArticleStyled>
            </ContentGrid>
            <ContentGrid>
              <h2>Serviços Outsourcing</h2>
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
                <StyledLink to="/">Veja mais!</StyledLink>
              </ArticleStyled>
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
