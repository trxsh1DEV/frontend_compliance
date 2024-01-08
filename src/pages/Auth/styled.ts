import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100%;
`;

export const Paragraph = styled.p`
  color: #dc6179;
`;

export const FormContainer = styled.form`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 5px 0px 24px -3px #2596be;

  & button {
    width: 100%;
    max-width: 17rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3.2rem;
  border: none;
  margin-bottom: 2.5rem;
`;

export const ContainerForm = styled.div`
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

export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 8px;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 2.5rem;
  width: 100%;
`;
