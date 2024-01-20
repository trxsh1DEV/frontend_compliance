import styled from "styled-components";

export const MainContainer = styled.main``;

export const DivFullWidth = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  cursor: pointer;
`;

export const ContentGrid = styled.div`
  background-color: #333;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* max-height: 27rem; */
  overflow-y: auto;
`;

export const AppContainer = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.div`
  /* flex: 1; */
  /* padding: 20px; */
  margin-left: 70px;
`;

export const DivCentered = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
