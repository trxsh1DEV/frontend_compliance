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
import {
  dataFirewallManufacturer,
  dataFirewallRulesAndVpn,
} from "../../../utils/data/dataUtil";
import { TextArea } from "../../Input/TextArea";

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
              <Container>
                <label id="manufacturer">Fabricante</label>
                <Controller
                  name="manufacturer"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="manufacturer"
                      value={field.value}
                      onChange={(e: any) => field.onChange(e.target.value)}
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      {dataFirewallManufacturer.map((item) => (
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
                <FormHelperText>{errors?.rules?.message}</FormHelperText>

                <label id="Regras">Regras</label>
                <Controller
                  name="rules"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="Regras"
                      value={field.value}
                      onChange={(e: any) => field.onChange(e.target.value)}
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      {dataFirewallRulesAndVpn.map((item) => (
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
                <FormHelperText>{errors?.rules?.message}</FormHelperText>

                <label id="vpn">VPN?</label>
                <Controller
                  name="vpn"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="vpn"
                      value={field.value}
                      onChange={(e: any) => field.onChange(e.target.value)}
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      {dataFirewallRulesAndVpn.map((item) => (
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
                <FormHelperText>{errors?.vpn?.message}</FormHelperText>
              </Container>

              <Container>
                <Input
                  {...register(`ips`)}
                  helperText={errors?.ips?.message}
                  label="Firewall Possui IPS?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`backup`)}
                  helperText={errors?.backup?.message}
                  label="Possui Backup?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`monitoring`)}
                  helperText={errors?.monitoring?.message}
                  label="Monitoramento?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>

              <Container>
                <Input
                  {...register(`restoration`)}
                  helperText={errors?.restoration?.message}
                  label="Teste de restauração?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`segmentation`)}
                  helperText={errors?.segmentation?.message}
                  label="Possui redes segmentadas?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
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
                <Input
                  {...register(`score`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  helperText={errors?.score?.message}
                  label="Pontuação (Score)"
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
