import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { lighten } from "polished";

export const InputStyle = styled.input<{ hasError: boolean }>`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${theme.colors.primary};
  width: 100%;

  &:focus {
    border-color: ${theme.colors.green};
    outline: 2px solid ${lighten(0.2, theme.colors.green)};
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
  margin-bottom: 0.2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: cenwter;
  width: 100%;

  & + & {
    margin-top: 1rem;
  }
`;

export const HelperText = styled.p`
  color: ${theme.colors.errorLight};
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;
