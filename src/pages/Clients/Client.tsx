import { useEffect, useState } from "preact/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  DivAbsolute,
} from "./styled";
import { FormRegisterProps } from "../../types/typesForm";
import { AddTask, CalculateRounded } from "@mui/icons-material";
import { formatDateString } from "../../utils/data/formatDate";
import { toast } from "react-toastify";
// import { handleCalculate } from "../../utils/calc/calculateScore";

export default function Client() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const [user, setUser] = useState<FormRegisterProps>();
  const [compliance, setCompliance] = useState<any>();

  const fetchData = async () => {
    const resUser = requestWithToken.get(`admin/clients/${id}`);
    const resCompliance = requestWithToken.post("compliance/latest", {
      client: id,
    });
    const [user, compliance] = await Promise.all([resUser, resCompliance]);
    setUser(user.data);
    setCompliance(compliance.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCalculate = async (id: string) => {
    try {
      await requestWithToken.get(`compliance/calculate/${id}`);
      fetchData();
      toast.success("Compliance calculado com sucesso!");
    } catch (err: any) {
      console.log(err.message);
      toast.error(
        `Falha ao calcular compliance: ${err?.response?.data?.errors[0]}`
      );
    }
  };

  const handleDetails = (part: string) => {
    navigate(`details`, {
      state: { data: compliance, part, id },
    });
  };

  if (!user || !compliance) return null;

  return (
    <>
      <MainContainer>
        <TopContainer>
          <WrapperGrid>
            <ContentGrid>Último operador: {user.name}</ContentGrid>
            <ContentGrid>E-mail: {user.email}</ContentGrid>
            <ContentGrid>Razão S: {user.social_reason}</ContentGrid>
            <ContentGrid>
              Ultima atualização: {formatDateString(compliance.updatedAt)}
            </ContentGrid>
            <ContentGrid>Contato: {user.contact}</ContentGrid>
            <ContentGrid>Tipo de contrato: {user.typeContract}</ContentGrid>
            <ContentGrid>
              Problemas Critícos? {user.criticalProblems ? "Sim" : "Não"}
            </ContentGrid>
            <ContentGrid>CNPJ: {user.cnpj}</ContentGrid>
          </WrapperGrid>
        </TopContainer>
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
                <div onClick={() => handleDetails("server")}>Veja mais!</div>
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
                <div onClick={() => handleDetails("backup")}>Veja mais!</div>
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
                <div onClick={() => handleDetails("firewall")}>Veja mais!</div>
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
                <div onClick={() => handleDetails("security")}>Veja mais!</div>
              </ArticleStyled>
            </ContentGrid>
          </WrapperGrid>
        </BottomContainer>
        <Link to="/compliance/add" state={{ id: user._id }}>
          <DivAbsolute r="5" b="2">
            <AddTask sx={{ fontSize: "5rem" }} />
          </DivAbsolute>
        </Link>
        <DivAbsolute
          r="17"
          b="2"
          onClick={() => handleCalculate(compliance._id)}
        >
          <CalculateRounded sx={{ fontSize: "5rem" }} />
        </DivAbsolute>
      </MainContainer>
    </>
  );
}
