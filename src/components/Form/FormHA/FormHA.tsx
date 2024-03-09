import {
  FormContainer,
  MainContainer,
  Container,
  Heading2,
} from "../styleForm";
import { Input } from "../../Input/Input";
import { FC, useId } from "react";
import useFormulary from "./useFormHA";
import { FormularyProps } from "../../../types/typesForm";
import { Button, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import "../style.css";
import { customStyles, multipleOption } from "../../../utils/data/dataUtil";
import { TextArea } from "../../Input/TextArea";
import ReactSelect from "react-select";
import { InputContent, Label } from "../../Input/styles";

const FormHA: FC<FormularyProps> = ({ nextStep, setFormValues, data, id }) => {
  const {
    errors,
    handleFormSubmit,
    handleNext,
    handleSubmit,
    register,
    haveHA,
    tested,
    formValidate,
    control,
    isEditable,
  } = useFormulary({ nextStep, setFormValues, data, id });

  const isEditMode = () => (!!data && !isEditable ? true : false);
  const inputId = useId();

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Alta Disponibilidade</Heading2>
          <Input
            {...register(`ha.enabled`)}
            type="checkbox"
            label="Tem Alta Disponibilidade (HA)?"
          />

          {haveHA && (
            <>
              <Container>
                <Input
                  {...register(`ha.tested`)}
                  type="checkbox"
                  disabled={isEditMode()}
                  // style={isEditStyleMode()}
                />

                <Input
                  {...register(`ha.rto`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  helperText={errors.ha?.rto?.message}
                  disabled={isEditMode() || !tested}
                  style={tested ? "" : { cursor: "not-allowed" }}
                  label="RTO (em horas)"
                  placeholder="Ex: 1, 24 (convertido em horas)"
                />
                <InputContent>
                  <Label htmlFor={inputId}>Maturidade</Label>
                  <Controller
                    name="ha.solutions"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={inputId}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        // defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <FormHelperText>
                    {errors.ha?.solutions?.message}
                  </FormHelperText>
                </InputContent>
              </Container>
              <Container>
                <Input
                  {...register(`ha.score`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  helperText={errors?.ha?.score?.message}
                  label="Pontuação (Score)"
                  disabled={isEditMode()}
                />
                <TextArea
                  {...register(`ha.description`)}
                  helperText={errors.ha?.description?.message}
                  label="Descrição (Opcional)"
                  placeholder="Insira uma descrição"
                  disabled={isEditMode()}
                />
              </Container>

              {data && (
                <Input
                  {...register(`ha.isEditable`)}
                  type="checkbox"
                  helperText={errors.ha?.isEditable?.message}
                  label="Deseja Editar?"
                />
              )}
              {!isEditMode() && (
                <button type="submit" disabled={!haveHA}>
                  Validate
                </button>
              )}
            </>
          )}

          {!data && (
            <Button
              size="large"
              sx={{ fontSize: "16px" }}
              color="secondary"
              variant="outlined"
              onClick={handleNext}
              disabled={!formValidate}
            >
              Next
            </Button>
          )}
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormHA;
