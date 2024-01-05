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
import { Button } from "@mui/material";

const FormBackup: FC<FormularyProps> = ({
  nextStep,
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
    register,
    isEnabled,
    haveBackup,
    isEditable,
  } = useFormulary({ nextStep, setFormValues, data, id });
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
                {/* <Input
                  {...register(`backup.frequency.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Frequencia de Backup"
                  helperText={errors.backup?.frequency?.description?.message}
                  style={isEnabled(0)}
                  disabled={isEditMode() || !!isEnabled(0)}
                /> */}
                <Input
                  {...register(`backup.frequency.level`)}
                  type="text"
                  placeholder="Informe 'low' | 'medium' | 'high'"
                  label="Frequencia de Backup"
                  helperText={errors.backup?.frequency?.level?.message}
                  style={isEnabled(0)}
                  disabled={isEditMode() || !!isEnabled(0)}
                />
                <Input
                  {...register(`backup.frequency.score`, {
                    valueAsNumber: true,
                  })}
                  label="Pontuação"
                  type="number"
                  helperText={errors.backup?.frequency?.score?.message}
                  style={isEnabled(0)}
                  disabled={isEditMode() || !!isEnabled(0)}
                />

                <Input
                  {...register(`backup.frequency.enabled`)}
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>

              <Container>
                {/* <Input
                  {...register(`backup.storage.local.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Backup Local"
                  helperText={
                    errors.backup?.storage?.local?.description?.message
                  }
                  style={isEnabled(1)}
                  disabled={isEditMode() || !!isEnabled(1)}
                /> */}
                <Input
                  {...register(`backup.storage.local.qtde`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  label="Quantidade de backups"
                  helperText={errors.backup?.storage?.local?.qtde?.message}
                  style={isEnabled(1)}
                  disabled={isEditMode() || !!isEnabled(1)}
                />
                <Input
                  {...register(`backup.storage.local.score`, {
                    valueAsNumber: true,
                  })}
                  label="Pontuação"
                  type="number"
                  helperText={errors.backup?.storage?.local?.score?.message}
                  style={isEnabled(1)}
                  disabled={isEditMode() || !!isEnabled(1)}
                />
                <Input
                  {...register(`backup.storage.local.enabled`)}
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>

              <Container>
                {/* <Input
                  {...register(`backup.storage.remote.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Backup Remoto"
                  helperText={
                    errors.backup?.storage?.remote?.description?.message
                  }
                  style={isEnabled(2)}
                  disabled={isEditMode() || !!isEnabled(2)}
                /> */}

                <Input
                  {...register(`backup.storage.remote.qtde`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  label="Quantidade de backups"
                  helperText={errors.backup?.storage?.remote?.qtde?.message}
                  style={isEnabled(2)}
                  disabled={isEditMode() || !!isEnabled(2)}
                />

                <Input
                  {...register(`backup.storage.remote.score`, {
                    valueAsNumber: true,
                  })}
                  label="Pontuação"
                  type="number"
                  helperText={errors.backup?.storage?.remote?.score?.message}
                  style={isEnabled(2)}
                  disabled={isEditMode() || !!isEnabled(2)}
                />
                <Input
                  {...register(`backup.storage.remote.enabled`)}
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>
              <Container>
                {/* <Input
                  {...register(`backup.policy.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Politicas de Backup"
                  helperText={errors.backup?.policy?.description?.message}
                  style={isEnabled(3)}
                  disabled={isEditMode() || !!isEnabled(3)}
                /> */}
                <Input
                  {...register(`backup.policy.score`, {
                    valueAsNumber: true,
                  })}
                  label="Politicas Backup (Points)"
                  type="number"
                  helperText={errors.backup?.policy?.score?.message}
                  style={isEnabled(3)}
                  disabled={isEditMode() || !!isEnabled(3)}
                />
                <Input
                  {...register(`backup.policy.enabled`)}
                  type="checkbox"
                  disabled={isEditMode()}
                />

                <Input
                  {...register(`backup.restoration.score`, {
                    valueAsNumber: true,
                  })}
                  label="T. de restauração (Points)"
                  type="number"
                  helperText={errors.backup?.restoration?.score?.message}
                  style={isEnabled(4)}
                  disabled={isEditMode() || !!isEnabled(4)}
                />
                <Input
                  {...register(`backup.restoration.enabled`)}
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>

              {/* <Container>
                <Input
                  {...register(`backup.restoration.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Teste de restauração"
                  helperText={errors.backup?.restoration?.description?.message}
                  style={isEnabled(4)}
                  disabled={isEditMode() || !!isEnabled(4)}
                />
                <Input
                  {...register(`backup.restoration.score`, {
                    valueAsNumber: true,
                  })}
                  label="T. de restauração (Points)"
                  type="number"
                  helperText={errors.backup?.restoration?.score?.message}
                  style={isEnabled(4)}
                  disabled={isEditMode() || !!isEnabled(4)}
                />
                <Input
                  {...register(`backup.restoration.enabled`)}
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container> */}

              <Container>
                <Input
                  {...register(`backup.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Descrição Geral"
                  helperText={errors.backup?.description?.message}
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
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormBackup;
