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
import { Button, FormHelperText, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { dataSecurityGPO, dataEnumNoneToAll } from "../../../utils/dataUtil";

const FormService: FC<FormularyProps> = ({
  nextStep,
  setFormValues,
  data,
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
    isEditable,
    haveSecurity,
  } = useFormulary({ nextStep, setFormValues, data, id });

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
                  {...register(`accessAuditing`)}
                  helperText={errors?.accessAuditing?.message}
                  label="Auditoria de acessos?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`policyPassword`)}
                  helperText={errors?.policyPassword?.message}
                  label="Política de senha?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`lgpd`)}
                  helperText={errors?.lgpd?.message}
                  label="De acordo com a LGPD?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>

              <Container>
                <label id="gpo">Maturidade de GPO</label>
                <Controller
                  name="gpo"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="gpo"
                      value={field.value}
                      onChange={(e: any) => field.onChange(e.target.value)}
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      {dataSecurityGPO.map((item) => (
                        <MenuItem
                          className="menuItem"
                          value={`${item}`}
                          disabled={isEditMode()}
                        >
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText>{errors?.gpo?.message}</FormHelperText>

                <label id="antivirus">Antivirus nos terminais</label>
                <Controller
                  name="antivirus"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="antivirus"
                      value={field.value}
                      onChange={(e: any) => field.onChange(e.target.value)}
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      {dataEnumNoneToAll.map((item) => (
                        <MenuItem
                          className="menuItem"
                          value={`${item}`}
                          disabled={isEditMode()}
                        >
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText>{errors?.antivirus?.message}</FormHelperText>
              </Container>

              <Container>
                <Input
                  {...register(`score`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  helperText={errors?.score?.message}
                  label="Pontuação (Score)"
                  disabled={isEditMode()}
                />

                <Input
                  {...register(`description`)}
                  helperText={errors?.description?.message}
                  label="Pontuação (Score)"
                  placeholder="Descrição"
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
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormService;
