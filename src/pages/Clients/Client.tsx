import { useEffect, useState } from "preact/hooks";
import { Link, useLocation } from "react-router-dom";
import { requestWithToken } from "../../utils/requestApi";
import {
  BottomContainer,
  TopContainer,
  CenterContainer,
  WrapperGrid,
  ContentGrid,
} from "./styled";
import { MainContainer } from "../../styles/mainStyles";
import { FormRegisterProps } from "../../types/typesForm";
import { Plus } from "phosphor-react";

export default function Client() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [data, setData] = useState<FormRegisterProps>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await requestWithToken.get(`clients/${id}`);
      setData(res.data);
    };

    fetchData();
  }, []);

  if (!data) return null;
  return (
    <>
      <MainContainer>
        <TopContainer>
          <WrapperGrid>
            <ContentGrid>{data.name}</ContentGrid>
            <ContentGrid>{data.email}</ContentGrid>
            <ContentGrid>{data.social_reason}</ContentGrid>
            <ContentGrid>{data.createdAt}</ContentGrid>
            <ContentGrid>11 99999-9999</ContentGrid>
            <ContentGrid>Tipo de contrato</ContentGrid>
            <ContentGrid>Próximas melhorias:</ContentGrid>
            <ContentGrid>CNPJ</ContentGrid>
          </WrapperGrid>
        </TopContainer>
        <CenterContainer>asdas</CenterContainer>
        <BottomContainer>
          <WrapperGrid>
            <ContentGrid>asdhuasiud</ContentGrid>
            <ContentGrid>asdhuasiud</ContentGrid>
            <ContentGrid>asdhuasiud</ContentGrid>
            <ContentGrid>asdhuasiud</ContentGrid>
            <ContentGrid>asdhuasiud</ContentGrid>
            <ContentGrid>asdhuasiud</ContentGrid>
            <ContentGrid>asdhuasiud</ContentGrid>
          </WrapperGrid>
        </BottomContainer>
        <Link to="/compliance/add" state={{ id: data._id }}>
          <button>
            <Plus />
          </button>
        </Link>
      </MainContainer>
    </>
  );
}
