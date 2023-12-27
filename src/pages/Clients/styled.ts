import { Link } from "react-router-dom";
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
  background-color: darkcyan;
`;

export const BottomContainer = styled.section`
  /* background-color: green; */
`;

export const MainContainer = styled.main`
  height: 100%;
  width: 100%;
`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-auto-flow: row;
  gap: 30px 20px;
  padding: 15px;
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
  margin: 0.7rem 0px;
  font-size: 1.6rem;
  overflow: hidden;
  /* white-space: nowrap;
  text-overflow: ellipsis; */
`;

export const Paragrafh = styled.p`
  overflow: hidden;
  max-height: 50px;
  padding: 0 3px;
  margin-bottom: 40px;
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
    background: rgb(238, 174, 202);
    background: linear-gradient(180deg, transparent, #3f3f3f 100%);
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.rose};
  position: absolute;
  bottom: 0;
  text-decoration: none;
  font-weight: bold;
  transition: all 400ms ease-in;

  &:hover {
    text-decoration: none;
  }
`;
