import { HTMLAttributes, forwardRef, useId } from "react";
import { HelperText, InputStyle, Label, InputContent } from "./styles";

type inputProps = HTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, inputProps>(
  (
    {
      type = "text",
      name = "",
      label = "",
      helperText = "",
      autoFocus = false,
      ...props
    },
    ref
  ) => {
    const inputId = useId();
    const hasError = helperText.length > 0;
    return (
      <InputContent>
        <Label htmlFor={inputId}>{label}</Label>
        <InputStyle
          id={inputId}
          type={type}
          name={name}
          ref={ref}
          hasError={hasError}
          {...props}
          autoFocus={autoFocus}
        />
        {hasError && <HelperText>{helperText}</HelperText>}
      </InputContent>
    );
  }
);
