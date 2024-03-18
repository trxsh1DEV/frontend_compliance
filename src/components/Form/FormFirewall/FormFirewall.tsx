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
import { TextArea } from "../../Input/TextArea";
import { InputContent } from "../../Input/styles";
import { Label, HelperText } from "../../Input/styles";
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

  function updateProgressBar() {
    // @ts-ignore
    console.log(document?.querySelector('input[type="number"]'));
  }
  updateProgressBar();

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
                  helperText={errors.nextGeneration?.enabled?.message}
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
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>
                    {errors.nextGeneration?.score?.message}
                  </HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`troughput.enabled`)}
                  type="checkbox"
                  helperText={errors.troughput?.enabled?.message}
                  label="Troughput (Mbps)"
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
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>{errors.troughput?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`documentedRules.enabled`)}
                  type="checkbox"
                  helperText={errors.documentedRules?.enabled?.message}
                  label="Regras documentadas?"
                />
                <InputContent>
                  <Label htmlFor={"score-2"}>Maturidade</Label>
                  <Controller
                    name="documentedRules.score"
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
                    {errors.documentedRules?.score?.message}
                  </HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`failOver.enabled`)}
                  type="checkbox"
                  helperText={errors.failOver?.enabled?.message}
                  label="Possui Fail Over?"
                />
                <InputContent>
                  <Label htmlFor={"score-3"}>Maturidade</Label>
                  <Controller
                    name="failOver.score"
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
                  <HelperText>{errors.failOver?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`loadBalance.enabled`)}
                  type="checkbox"
                  helperText={errors.loadBalance?.enabled?.message}
                  label="Possui Load Balance?"
                />
                <InputContent>
                  <Label htmlFor={"score-4"}>Maturidade</Label>
                  <Controller
                    name="loadBalance.score"
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
                  <HelperText>{errors.loadBalance?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`highAvailability.enabled`)}
                  type="checkbox"
                  helperText={errors.highAvailability?.enabled?.message}
                  label="Possui HA?"
                />
                <InputContent>
                  <Label htmlFor={"score-5"}>Maturidade</Label>
                  <Controller
                    name="highAvailability.score"
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
                  <HelperText>
                    {errors.highAvailability?.score?.message}
                  </HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`monitoring.enabled`)}
                  type="checkbox"
                  helperText={errors.monitoring?.enabled?.message}
                  label="Possui Monitoramento?"
                />
                <InputContent>
                  <Label htmlFor={"score-6"}>Maturidade</Label>
                  <Controller
                    name="monitoring.score"
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
                  <HelperText>{errors.monitoring?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`vpn.enabled`)}
                  type="checkbox"
                  helperText={errors.vpn?.enabled?.message}
                  label="Possui VPN?"
                />
                <InputContent>
                  <Label htmlFor={"score-7"}>Maturidade</Label>
                  <Controller
                    name="vpn.score"
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
                  <HelperText>{errors.vpn?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`links.qtde`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  helperText={errors.links?.qtde?.message}
                  label="Links (Qtd)?"
                />
                <InputContent>
                  <Label htmlFor={"score-8"}>Maturidade</Label>
                  <Controller
                    name="links.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-8"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode()}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>{errors.links?.score?.message}</HelperText>
                </InputContent>
              </Container>

              <Container>
                <Input
                  {...register(`license.expired_at`)}
                  type="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  helperText={errors.license?.expired_at?.message}
                  label="Licença (Expira em)?"
                />
                <InputContent>
                  <Label htmlFor={"score-7"}>Maturidade</Label>
                  <Controller
                    name="license.score"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        name={field.name}
                        inputId={"score-7"}
                        options={multipleOption}
                        onChange={(val: any) => field.onChange(val.value)}
                        styles={customStyles}
                        isDisabled={isEditMode()}
                        defaultValue={multipleOption[0]}
                      />
                    )}
                  />
                  <HelperText>{errors.links?.score?.message}</HelperText>
                </InputContent>
              </Container>

              {/* <ProgressBar>
                <Progress style={{ backgroundColor: updateProgressBar(), width: `${Math.min((daysRemaining / totalDays) * 100, 100) * 4}px` }} />
            </ProgressBar> */}

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
