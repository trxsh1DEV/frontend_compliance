import { HTMLAttributes, forwardRef, useId } from "react";
import { HelperText, Label, InputContent, TextAreaStyle } from "./styles";

type textAreaProps = HTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const TextArea = forwardRef<HTMLInputElement, textAreaProps>(
  ({ name = "", label = "", helperText = "", ...props }, ref) => {
    const inputId = useId();
    const hasError = helperText.length > 0;
    return (
      <InputContent>
        <Label htmlFor={inputId}>{label}</Label>
        <TextAreaStyle id={inputId} name={name} ref={ref} {...props} />
        {hasError && <HelperText>{helperText}</HelperText>}
      </InputContent>
    );
  }
);
