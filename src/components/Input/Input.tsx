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

type inputProps = HTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  sizeWidth?: string;
};

export const Input = forwardRef<HTMLInputElement, inputProps>(
  (
    {
      type = "text",
      name = "",
      sizeWidth = "100%",
      label = "\u00A0",
      helperText = "",
      ...props
    },
    ref
  ) => {
    const inputId = useId();
    const hasError = helperText.length > 0;
    return (
      <InputContent>
        <Label sizeWidth={sizeWidth} htmlFor={inputId}>
          {label}
        </Label>
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
