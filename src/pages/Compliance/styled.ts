import styled from "styled-components";

interface DivAbsoluteProps {
  r?: string;
  b?: string;
}

export const DivButton = styled.div`
  cursor: pointer;
`;

export const TopContainer = styled.section`
  display: flex;
  height: fit-content;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* background-color: green; */
  padding: 2rem 3rem 2rem 2rem;
  /* border: 2px solid azure; */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
`;

export const Th = styled.th`
  /* background-color: #f2f2f2; */
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
`;

export const CenterContainer = styled.section`
  background-color: darkcyan;
`;

export const BottomContainer = styled.section``;

export const MainContainer = styled.main`
  height: 100%;
  width: 100%;
`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: row;
  gap: 30px 20px;
  padding: 2rem 3rem 2rem 2rem;
  overflow: hidden;
  /* justify-items: self-start; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentGrid = styled.div`
  background-color: #333;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* max-height: 27rem; */
  overflow-y: auto;
`;

export const DivAbsolute = styled.button<DivAbsoluteProps>`
  position: fixed;
  ${({ r, b }) =>
    `
    right: ${r}rem;
    bottom: ${b}rem;
  `}
`;
export const Bold = styled.b`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.rose};
`;

export const WrapperAvailable = styled.div`
  margin: 0.7rem 0px;
  font-size: 1.6rem;
  overflow: hidden;
  /* white-space: nowrap;
  text-overflow: ellipsis; */
`;

export const Paragrafh = styled.p`
  overflow: hidden;
  height: 60px;
  padding: 0 3px;
  margin-bottom: 1rem;
`;

export const ArticleStyled = styled.article`
  overflow: hidden;
  position: relative;
  /* height: 230px; */

  &::before {
    content: "";
    position: absolute;
    pointer-events: none;
    bottom: 35px;
    width: 100%;
    height: 100px;
    border-radius: 8px;
    background: linear-gradient(180deg, transparent, #3f3f3f 100%);
  }
`;
