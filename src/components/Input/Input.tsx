import { HTMLAttributes, forwardRef, useId } from "react";
import {
  HelperText,
  InputStyle,
  Label,
  InputContent,
  Button,
  // Description,
  HiddenToggleChecked,
  Slider,
  SwitchLabel,
} from "./styles";
import "./Input.css";

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
    return (
      <InputContent>
        <Label htmlFor={inputId}>{label}</Label>
        {type === "checkbox" ? (
          <SwitchLabel>
            <HiddenToggleChecked
              id={inputId}
              type={type}
              name={name}
              ref={ref}
              {...props}
            />
            <Slider>
              <Button />
            </Slider>
          </SwitchLabel>
        ) : (
          <InputStyle
            id={inputId}
            type={type}
            name={name}
            ref={ref as React.RefObject<HTMLInputElement>}
            hasError={hasError}
            {...props}
          />
        )}
        {hasError && <HelperText>{helperText}</HelperText>}
      </InputContent>
    );
  }
);
