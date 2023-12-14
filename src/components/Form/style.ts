import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 800px;
  display: flex;
  /* align-items: flex-start; */
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-width: 800px; */
  gap: 20px;
  & + & {
    margin-top: 1rem;
  }
`;

export const Heading2 = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;
