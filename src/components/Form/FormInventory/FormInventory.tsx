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
  dataInventoryDevices,
  dataEnumNoneToAll,
} from "../../../utils/data/dataUtil";

const FormInventory: FC<FormularyProps> = ({
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
    haveInventory,
  } = useFormulary({ nextStep, setFormValues, data, id });

  const isEditMode = () => (!!data && !isEditable ? true : false);

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Inventário</Heading2>
          <Input
            {...register(`enabled`)}
            type="checkbox"
            label="Tem Inventário?"
          />

          {haveInventory && (
            <>
              <Container>
                <Input
                  {...register(`contacts`)}
                  helperText={errors?.contacts?.message}
                  label="Contatos dos colaboradores?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`description`)}
                  helperText={errors?.description?.message}
                  label="Descrição"
                  type="text"
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

              <Container>
                <label id="agentInventory">Milvus Agent</label>
                <Controller
                  name="agentInventory"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="agentInventory"
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
                <FormHelperText>
                  {errors?.agentInventory?.message}
                </FormHelperText>

                <label id="devices">Dispositivos inventariados</label>
                <Controller
                  name="devices"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="devices"
                      multiple
                      value={
                        Array.isArray(field.value) ? field.value : ["Nenhum"]
                      }
                      onChange={(e: any) => field.onChange(e.target.value)}
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      {dataInventoryDevices.map((item) => (
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
                <FormHelperText>{errors?.devices?.message}</FormHelperText>
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
                <button type="submit" disabled={!haveInventory}>
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

export default FormInventory;
