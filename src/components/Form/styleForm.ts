import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 1rem;

  & button {
    width: 100%;
    max-width: 17rem;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
  max-width: 800px;
  gap: 2rem;
`;

export const Heading2 = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

export const ButtonContent = styled.div`
  width: 100%;
  max-width: 16rem;
  display: inline-flex;
  justify-content: center;
  gap: 2rem;
`;
