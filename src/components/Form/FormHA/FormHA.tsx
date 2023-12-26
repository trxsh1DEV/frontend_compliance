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
import {
  Button,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";
import "./style.css";

const menu = {
  color: "#fff",
  backgroundColor: "#333",
  fontSize: "14px",
};

const FormHA: FC<FormularyProps> = ({ nextStep, setFormValues }) => {
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
  } = useFormulary({ nextStep, setFormValues });

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
                {/* <Input
                  {...register(`ha.solutions`)}
                  type="text"
                  placeholder="redundancy, load balance, failover, cluster, none"
                  label="Soluções de HA"
                  helperText={errors.ha?.solutions?.message}
                /> */}
                <InputLabel
                  id="multiple-select-label"
                  sx={{ color: "#fff", fontSize: "16px" }}
                >
                  Soluções
                </InputLabel>
                <Controller
                  name="ha.solutions"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="multiple-select-label"
                      id="multiple-select"
                      multiple
                      value={field.value}
                      onChange={(e: any) => field.onChange(e.target.value)}
                      label="Selecionar Opções"
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      <MenuItem sx={menu} className="menuItem" value="none">
                        none
                      </MenuItem>
                      <MenuItem
                        sx={menu}
                        className="menuItem"
                        value="redundancy"
                      >
                        redundancy
                      </MenuItem>
                      <MenuItem sx={menu} className="menuItem" value="failover">
                        failover
                      </MenuItem>
                      <MenuItem sx={menu} className="menuItem" value="cluster">
                        cluster
                      </MenuItem>
                      <MenuItem
                        sx={menu}
                        className="menuItem"
                        value="load balance"
                      >
                        failover
                      </MenuItem>
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
