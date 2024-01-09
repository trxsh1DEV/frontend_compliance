import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { lighten } from "polished";

export const InputStyle = styled.input<{ hasError: boolean }>`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${theme.colors.cyanPrimary};
  margin: 0;
  width: fit-content;
  max-width: 300px;

  &:focus {
    border-color: ${theme.colors.cyanPrimary};
    outline: 1px solid ${lighten(0.2, theme.colors.cyanPrimary)};
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

export const Label = styled.label`
  color: gray;
  font-size: 2rem;
  margin-bottom: 0.8rem;
  /* height: 50px; */
  width: 100%;
  text-align: center;
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 0.2rem;
`;

export const HelperText = styled.p`
  color: ${theme.colors.errorLight};
  font-size: 1.2rem;
  padding-top: 0.5rem;
  width: 100%;
  text-align: center;
`;
