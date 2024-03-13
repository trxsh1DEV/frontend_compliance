import {
  FormContainer,
  MainContainer,
  Container,
  Heading2,
} from "../styleForm";
import { Input } from "../../Input/Input";
import { FC } from "react";
import useFormulary from "./useFormulary";
import { FormularyProps } from "../../../types/typesForm";
import { Button, FormHelperText } from "@mui/material";
import { TextArea } from "../../Input/TextArea";
import { InputContent, Label } from "../../Input/styles";
import { Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { customStyles, multipleOption } from "../../../utils/data/dataUtil";

const FormBackup: FC<FormularyProps> = ({
  nextStep,
  previousStep,
  setFormValues,
  data,
  id,
}) => {
  const {
    errors,
    formValidate,
    handleFormSubmit,
    handleNext,
    handleSubmit,
    control,
    register,
    isEnabled,
    haveBackup,
    handlePrevious,
    isEditable,
  } = useFormulary({ nextStep, previousStep, setFormValues, data, id });
  const isEditMode = () => (!!data && !isEditable ? true : false);

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Backup</Heading2>

          <Input
            {...register(`backup.enabled`)}
            type="checkbox"
            label="Tem Backup?"
          />

          {haveBackup && (
            <>
              {data && (
                <Input
                  {...register(`backup.isEditable`)}
                  type="checkbox"
                  helperText={errors.backup?.isEditable?.message}
                  label="Deseja Editar?"
                />
              )}

              <Container>
                <Input
                  {...register(`backup.storage.local.qtde`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  label="Backup Local (Qtd)"
                  helperText={errors.backup?.storage?.local?.qtde?.message}
                  style={isEnabled(0)}
                  disabled={isEditMode() || !!isEnabled(0)}
                />
                <InputContent>
                  <Label htmlFor={"score-0"}>Maturidade</Label>
                  <Controller
                    name="backup.storage.local.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-0"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || !!isEnabled(0)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <FormHelperText>
                    {errors.backup?.storage?.local?.message}
                  </FormHelperText>
                </InputContent>
                <Input
                  {...register(`backup.storage.local.enabled`)}
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>

              <Container>
                <Input
                  {...register(`backup.storage.remote.qtde`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  label="Backup Remoto (Qtd)"
                  helperText={errors.backup?.storage?.remote?.qtde?.message}
                  style={isEnabled(1)}
                  disabled={isEditMode() || !!isEnabled(1)}
                />
                <InputContent>
                  <Label htmlFor={"score-1"}>Maturidade</Label>
                  <Controller
                    name="backup.storage.remote.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-1"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || !!isEnabled(1)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <FormHelperText>
                    {errors.backup?.storage?.remote?.message}
                  </FormHelperText>
                </InputContent>
                <Input
                  {...register(`backup.storage.remote.enabled`)}
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>

              <Container>
                <TextArea
                  {...register(`backup.description`)}
                  helperText={errors.backup?.description?.message}
                  label="Descrição (Opcional)"
                  placeholder="Insira uma descrição"
                  disabled={isEditMode()}
                />
              </Container>

              {!isEditMode() && (
                <button type="submit" disabled={!haveBackup}>
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

export default FormBackup;
