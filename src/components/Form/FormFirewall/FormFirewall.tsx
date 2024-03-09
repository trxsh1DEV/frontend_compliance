import {
  FormContainer,
  MainContainer,
  Container,
  Heading2,
} from "../styleForm";
import { Input } from "../../Input/Input";
import { FC } from "react";
import useFormulary from "./useForm";
import { FormularyProps } from "../../../types/typesForm";
import { Button, FormHelperText } from "@mui/material";
// import { Controller } from "react-hook-form";
import { TextArea } from "../../Input/TextArea";
import { InputContent } from "../../Input/styles";
import { Label } from "../../Input/styles";
import { Controller } from "react-hook-form";
import { customStyles, multipleOption } from "../../../utils/data/dataUtil";
import ReactSelect from "react-select";

const FormFirewall: FC<FormularyProps> = ({
  nextStep,
  setFormValues,
  data,
  previousStep,
  id,
}) => {
  const {
    errors,
    handleFormSubmit,
    handleNext,
    handleSubmit,
    register,
    formValidate,
    control,
    isEnabled,
    isEditable,
    haveFirewall,
    handlePrevious,
  } = useFormulary({ nextStep, previousStep, setFormValues, data, id });

  const isEditMode = () => (!!data && !isEditable ? true : false);

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Firewall</Heading2>
          <Input
            {...register(`enabled`)}
            type="checkbox"
            label="Tem Firewall?"
          />

          {haveFirewall && (
            <>
              {data && (
                <Input
                  {...register(`isEditable`)}
                  type="checkbox"
                  helperText={errors.isEditable?.message}
                  label="Deseja Editar?"
                />
              )}

              <Container>
                <Input
                  {...register(`nextGeneration.enabled`)}
                  type="checkbox"
                  helperText={errors.nextGeneration?.message}
                  label="Next Generation?"
                />
                <InputContent>
                  <Label htmlFor={"score-0"}>Maturidade</Label>
                  <Controller
                    name="nextGeneration.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-0"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(0)}
                      />
                    )}
                  />
                  <FormHelperText>
                    {errors.nextGeneration?.message}
                  </FormHelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`troughput.enabled`)}
                  type="checkbox"
                  helperText={errors.troughput?.message}
                  label={`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Troughput\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`}
                />
                <InputContent>
                  <Label htmlFor={"score-1"}>Maturidade</Label>
                  <Controller
                    name="troughput.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-1"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(1)}
                      />
                    )}
                  />
                  <FormHelperText>
                    {errors.nextGeneration?.message}
                  </FormHelperText>
                </InputContent>
              </Container>

              <Container>
                <TextArea
                  {...register(`description`)}
                  type="text"
                  helperText={errors?.description?.message}
                  label="Descrição (Opcional)"
                  placeholder="Insira uma descrição"
                  disabled={isEditMode()}
                />
              </Container>

              {data && (
                <Input
                  {...register(`isEditable`)}
                  type="checkbox"
                  helperText={errors?.isEditable?.message}
                  label="Deseja Editar?"
                />
              )}
              {!isEditMode() && (
                <button type="submit" disabled={!haveFirewall}>
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

          {!data && (
            <Button
              size="large"
              sx={{ fontSize: "16px" }}
              color="secondary"
              variant="outlined"
              onClick={handlePrevious}
            >
              Previous
            </Button>
          )}
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormFirewall;
