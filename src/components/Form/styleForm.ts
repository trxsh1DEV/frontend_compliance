import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  & button {
    width: 100%;
    max-width: 17rem;
  }
`;

export const MainContainer = styled.div`
  width: calc(100vw - 250px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  overflow: hidden;
  gap: 2rem;
  & + & {
    margin-top: 1rem;
  }
`;

export const Heading2 = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;

export const ButtonContent = styled.div`
  width: 100%;
  max-width: 16rem;
  display: inline-flex;
  justify-content: center;
  gap: 2rem;
`;
