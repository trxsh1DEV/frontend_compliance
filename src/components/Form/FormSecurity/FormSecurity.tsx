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
import { Button } from "@mui/material";
import { Controller } from "react-hook-form";
import { multipleOption, customStyles } from "../../../utils/data/dataUtil";
import { InputContent, Label, HelperText } from "../../Input/styles";
import ReactSelect from "react-select";

const FormSecurity: FC<FormularyProps> = ({
  nextStep,
  previousStep,
  setFormValues,
  data,
  id,
}) => {
  const {
    errors,
    handleFormSubmit,
    handleNext,
    handlePrevious,
    handleSubmit,
    register,
    formValidate,
    isEnabled,
    control,
    isEditable,
    haveSecurity,
  } = useFormulary({ nextStep, previousStep, setFormValues, data, id });

  const isEditMode = () => (!!data && !isEditable ? true : false);

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Segurança da informação</Heading2>
          <Input
            {...register(`enabled`)}
            type="checkbox"
            label="Especificar segurança da organização?"
          />

          {haveSecurity && (
            <>
              <Container>
                <Input
                  {...register(`antivirus.enabled`)}
                  type="checkbox"
                  helperText={errors.antivirus?.enabled?.message}
                  label="Possui Antivirus?"
                />
                <InputContent>
                  <Label htmlFor={"score-0"}>Maturidade</Label>
                  <Controller
                    name="antivirus.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-0"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(0)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>{errors.antivirus?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`firewall.enabled`)}
                  type="checkbox"
                  helperText={errors.firewall?.enabled?.message}
                  label="Possui firewall?"
                />
                <InputContent>
                  <Label htmlFor={"score-1"}>Maturidade</Label>
                  <Controller
                    name="firewall.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-1"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(1)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>{errors.firewall?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`policy_password.enabled`)}
                  type="checkbox"
                  helperText={errors.policy_password?.enabled?.message}
                  label="Políticas de senha"
                />
                <InputContent>
                  <Label htmlFor={"score-2"}>Maturidade</Label>
                  <Controller
                    name="policy_password.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-2"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(2)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>
                    {errors.policy_password?.score?.message}
                  </HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`identity_management.enabled`)}
                  type="checkbox"
                  helperText={errors.identity_management?.enabled?.message}
                  label="Gestão de identidade"
                />
                <InputContent>
                  <Label htmlFor={"score-3"}>Maturidade</Label>
                  <Controller
                    name="identity_management.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-3"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(3)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>
                    {errors.identity_management?.score?.message}
                  </HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`mfa.enabled`)}
                  type="checkbox"
                  helperText={errors.mfa?.enabled?.message}
                  label="Possui MFA?"
                />
                <InputContent>
                  <Label htmlFor={"score-4"}>Maturidade</Label>
                  <Controller
                    name="mfa.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-4"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(4)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>{errors.mfa?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`antispam.enabled`)}
                  type="checkbox"
                  helperText={errors.antispam?.enabled?.message}
                  label="Gestão de identidade"
                />
                <InputContent>
                  <Label htmlFor={"score-5"}>Maturidade</Label>
                  <Controller
                    name="antispam.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-5"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(5)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>{errors.antispam?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`access_control.enabled`)}
                  type="checkbox"
                  helperText={errors.access_control?.enabled?.message}
                  label="Controle de acesso"
                />
                <InputContent>
                  <Label htmlFor={"score-6"}>Maturidade</Label>
                  <Controller
                    name="access_control.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-6"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(6)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>
                    {errors.access_control?.score?.message}
                  </HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`network_segmentation.enabled`)}
                  type="checkbox"
                  helperText={errors.network_segmentation?.enabled?.message}
                  label="Segmentação de redes"
                />
                <InputContent>
                  <Label htmlFor={"score-7"}>Maturidade</Label>
                  <Controller
                    name="network_segmentation.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-7"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode() || isEnabled(7)}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>
                    {errors.network_segmentation?.score?.message}
                  </HelperText>
                </InputContent>
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
                <button type="submit" disabled={!haveSecurity}>
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

export default FormSecurity;
