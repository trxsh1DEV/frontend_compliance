import {
  FormContainer,
  MainContainer,
  Container,
  Heading2,
} from "../styleForm";
import { Input } from "../../Input/Input";
import { FC } from "react";
import useFormulary from "./useFormHA";
import { FormularyPropsHA } from "../../../types/typesForm";
import { Button, FormHelperText, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import "./style.css";
import { dataHAUtil } from "../../../utils/dataUtil";

const FormHA: FC<FormularyPropsHA> = ({ nextStep, setFormValues, data }) => {
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
    // refFocus,
  } = useFormulary({ nextStep, setFormValues, data });

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Backup</Heading2>
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
                  // ref={refFocus}
                />
                <Input {...register(`ha.tested`)} type="checkbox" />

                <Input
                  {...register(`ha.rto`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  helperText={errors.ha?.rto?.message}
                  disabled={!tested}
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
                        <MenuItem className="menuItem" value={`${item}`}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText>{errors.ha?.solutions?.message}</FormHelperText>
              </Container>
              <button type="submit" disabled={!haveHA}>
                Validate
              </button>
            </>
          )}
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
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormHA;
