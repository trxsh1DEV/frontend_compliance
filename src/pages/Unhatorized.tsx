import styled from "styled-components";

const UnauthorizedPage = () => {
  return (
    <Container>
      <Content>
        <Title>401 - Unauthorized</Title>
        <Message>
          Desculpe, você não tem permissão para acessar esta página.
        </Message>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
`;

const Content = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #e74c3c;
  margin-bottom: 10px;
`;

const Message = styled.p`
  color: #333333;
  font-size: 16px;
  line-height: 1.5;
`;

export default UnauthorizedPage;
