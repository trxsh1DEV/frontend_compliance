import { HTMLAttributes, forwardRef, useId } from "react";
import { Container, HelperText, InputStyle, Label } from "./styles";

type inputProps = HTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, inputProps>(
  (
    { type = "text", name = "", label = "", helperText = "", ...props },
    ref
  ) => {
    const inputId = useId();
    const hasError = helperText.length > 0;
    // console.log(hasError);
    return (
      <>
        <Container>
          <Label htmlFor={inputId}>{label}</Label>
          <InputStyle
            id={inputId}
            type={type}
            name={name}
            ref={ref}
            hasError={hasError}
            {...props}
          />

          {hasError && <HelperText>{helperText}</HelperText>}
        </Container>
      </>
    );
  }
);
