import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { lighten } from "polished";

export const InputStyle = styled.input<{ hasError: boolean }>`
  display: inline-block;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${theme.colors.primary};
  margin: 0;
  width: fit-content;
  max-width: 300px;

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
  margin-bottom: 0.8rem;
  height: 30px;
  width: 100%;
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  gap: 20px;
  & + & {
    margin-top: 1rem;
  }
`;

export const HelperText = styled.p`
  color: ${theme.colors.errorLight};
  font-size: 1.2rem;
  padding-top: 0.5rem;
  width: 100%;
  text-align: center;
`;
