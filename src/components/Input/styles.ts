import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const InputStyle = styled.input<{ hasError: boolean }>`
  font-size: 1.8rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${theme.colors.cyanPrimary};
  margin: 0;
  width: fit-content;
  max-width: 300px;

  &:focus {
    border: 0;
    outline: 2px solid #fff;
  }

  &::placeholder {
    color: gray;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors.errorLight};
    `}
`;

export const TextAreaStyle = styled.textarea<{ hasError: boolean }>`
  font-size: 1.8rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${theme.colors.cyanPrimary};
  margin-left: 3rem;
  width: 350px;
  height: 150px;
  max-width: 600px;
  resize: none;

  &:focus {
    border: 0;
    outline: 2px solid #fff;
  }

  &::placeholder {
    color: gray;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors.errorLight};
    `}
`;

export const Label = styled.label<{ sizeWidth: string }>`
  color: gray;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  height: 100%;
  /* width: ${(props) => props.sizeWidth}; */
  text-align: center;
  letter-spacing: 0.12rem;
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 0.4rem;
  /* background-color: red; */
`;

export const HelperText = styled.p`
  color: ${theme.colors.errorLight};
  font-size: 1rem;
  padding-top: 0.5rem;
  width: 100%;
  text-align: center;
`;

// Toggle Button

export const SwitchLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  /* margin-top: 1.2rem; */
  width: 100%;
  /* min-width: 200px; */
`;

export const HiddenToggle = styled.input`
  display: none;
`;

export const Slider = styled.div`
  background: #ddd;
  border: 0.1rem solid #bbb;
  cursor: pointer;
  border-radius: 2rem;
  transition: all 300ms ease-in-out;
  width: 7.5rem;
  height: 3rem;
  position: relative;
  box-shadow: inset -0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2),
    0 0 1rem rgba(0, 0, 0, 0.1);

  &:after {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translate(0, -50%);
    line-height: 1.4rem;
    color: ${theme.colors.purple};
    font-weight: bold;
    z-index: 1;
    transition: all 300ms ease-in-out;
    content: "OFF";
  }
`;

export const HiddenToggleChecked = styled(HiddenToggle)`
  &:checked ~ ${Slider} {
    background: ${theme.colors.purple};
    box-shadow: inset 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2),
      0 0 1rem rgba(50, 0, 150, 0.2);
  }

  &:checked ~ ${Slider}::after {
    /* top: 1.1rem; */
    right: 3.7rem;
    color: #f1f1ff;
    content: "ON";
  }
`;
export const Button = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background: ${theme.colors.purple};
  top: 0.6rem;
  left: 0.6rem;
  transition: all 300ms ease-in-out;
  border-radius: 50%;
  z-index: 2;
  box-shadow: inset -0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);

  /* Aplicar estilos quando o toggle está ativado */
  ${HiddenToggleChecked}:checked ~ ${Slider} & {
    left: 5rem;
    background: #e0e2db;
    box-shadow: inset 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

SwitchLabel.defaultProps = {
  centralized: true,
};
