import styled from "styled-components";

export const Image = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1.5rem;

  & > img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const DivButton = styled.div`
  cursor: pointer;
`;

export const TopContainer = styled.section`
  background-color: gray;
`;

export const CenterContainer = styled.section`
  background-color: cyan;
`;

export const BottomContainer = styled.section`
  background-color: green;
  overflow-y: hidden;
`;

export const MainContainer = styled.main`
  height: 100%;
  width: 100%;
`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-flow: row;
  gap: 30px 20px;
  padding: 15px;
  overflow-y: hidden;
  /* justify-items: self-start; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentGrid = styled.div`
  background-color: #333;
  font-size: 1.4rem !important;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  padding: 5px;
  position: absolute;
  background-color: #fff;
`;

export const Bold = styled.b`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.rose};
`;

export const WrapperAvailable = styled.div`
  margin: 1rem 0px;
`;

export const ContentGteaa = styled.article`
  /* font-size: 1.2rem !important; */
`;
