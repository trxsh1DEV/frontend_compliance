import {
  FormContainer,
  MainContainer,
  Container,
  Heading2,
} from "../styleForm";
import { Input } from "../../Input/Input";
import { FC } from "react";
import useFormulary from "./useFormHA";
import { FormularyProps } from "../../../types/typesForm";
import { Button, FormHelperText, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import "../style.css";
import { dataHAUtil } from "../../../utils/data/dataUtil";

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
  // console.log(refFocus);
  // const isEditStyleMode = () =>
  //   !!data && !isEditable ? { cursor: "not-allowed" } : "";

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
                  {...register(`ha.description`)}
                  type="text"
                  helperText={errors.ha?.description?.message}
                  label="Descrição (Opcional)"
                  placeholder="Insira uma descrição"
                  disabled={isEditMode()}
                />
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
                  label="Tempo de RTO (em horas)"
                  placeholder="Ex: 1, 24 (convertido em horas)"
                />
              </Container>
              <Container>
                <Input
                  {...register(`ha.score`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  helperText={errors.ha?.score?.message}
                  label="Pontuação (Score)"
                  disabled={isEditMode()}
                />
                <label id="multiple-select-label">Soluções</label>
                <Controller
                  name="ha.solutions"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="multiple-select-label"
                      multiple
                      value={field.value}
                      onChange={(e: any) => field.onChange(e.target.value)}
                      // label="Selecionar Opções"
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      {dataHAUtil.map((item) => (
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
                <FormHelperText>{errors.ha?.solutions?.message}</FormHelperText>
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
