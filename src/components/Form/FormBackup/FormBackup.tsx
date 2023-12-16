import { FormContainer, MainContainer, Container, Heading2 } from "../style";
import { Input } from "../../Input/Input";
import { FC } from "react";
import useFormulary from "./useFormulary";
import { FormularyProps } from "../../../types/typesForm";

const FormBackup: FC<FormularyProps> = ({ nextStep, setFormValues }) => {
  const {
    errors,
    formValidate,
    handleFormSubmit,
    handleNext,
    handleSubmit,
    register,
    isEnabled,
    haveBackup,
  } = useFormulary({ nextStep, setFormValues });

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Backup</Heading2>

          <Input
            {...register(`backup.enabled`)}
            type="checkbox"
            label="Tem Backup?"
            autofocus={false}
          />
          {haveBackup && (
            <>
              <Container>
                <Input
                  {...register(`backup.frequency.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Frequencia de Backup"
                  helperText={errors.backup?.frequency?.description?.message}
                  style={isEnabled(0)}
                  disabled={!!isEnabled(0)}
                />
                <Input
                  {...register(`backup.frequency.level`)}
                  type="text"
                  placeholder="Digite 'low' | 'high'"
                  label="Frequencia de Backup"
                  helperText={errors.backup?.frequency?.level?.message}
                  style={isEnabled(0)}
                  disabled={!!isEnabled(0)}
                />
                <Input
                  {...register(`backup.frequency.score`, {
                    valueAsNumber: true,
                  })}
                  label="Pontuação"
                  type="number"
                  helperText={errors.backup?.frequency?.score?.message}
                  style={isEnabled(0)}
                  disabled={!!isEnabled(0)}
                />

                <Input
                  {...register(`backup.frequency.enabled`)}
                  type="checkbox"
                />
              </Container>

              <Container>
                <Input
                  {...register(`backup.storage.local.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Backup Local"
                  helperText={
                    errors.backup?.storage?.local?.description?.message
                  }
                  style={isEnabled(1)}
                  disabled={!!isEnabled(1)}
                />
                <Input
                  {...register(`backup.storage.local.qtde`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  label="Quantidade de backups"
                  helperText={errors.backup?.storage?.local?.qtde?.message}
                  style={isEnabled(1)}
                  disabled={!!isEnabled(1)}
                />
                <Input
                  {...register(`backup.storage.local.score`, {
                    valueAsNumber: true,
                  })}
                  label="Pontuação"
                  type="number"
                  helperText={errors.backup?.storage?.local?.score?.message}
                  style={isEnabled(1)}
                  disabled={!!isEnabled(1)}
                />
                <Input
                  {...register(`backup.storage.local.enabled`)}
                  type="checkbox"
                />
              </Container>

              <Container>
                <Input
                  {...register(`backup.storage.remote.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Backup Remoto"
                  helperText={
                    errors.backup?.storage?.remote?.description?.message
                  }
                  style={isEnabled(2)}
                  disabled={!!isEnabled(2)}
                />

                <Input
                  {...register(`backup.storage.remote.qtde`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  label="Quantidade de backups"
                  helperText={errors.backup?.storage?.remote?.qtde?.message}
                  style={isEnabled(2)}
                  disabled={!!isEnabled(2)}
                />

                <Input
                  {...register(`backup.storage.remote.score`, {
                    valueAsNumber: true,
                  })}
                  label="Pontuação"
                  type="number"
                  helperText={errors.backup?.storage?.remote?.score?.message}
                  style={isEnabled(2)}
                  disabled={!!isEnabled(2)}
                />
                <Input
                  {...register(`backup.storage.remote.enabled`)}
                  type="checkbox"
                />
              </Container>
              <Container>
                <Input
                  {...register(`backup.policy.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Politicas de Backup"
                  helperText={errors.backup?.policy?.description?.message}
                  style={isEnabled(3)}
                  disabled={!!isEnabled(3)}
                />
                <Input
                  {...register(`backup.policy.score`, {
                    valueAsNumber: true,
                  })}
                  label="Pontuação"
                  type="number"
                  helperText={errors.backup?.policy?.score?.message}
                  style={isEnabled(3)}
                  disabled={!!isEnabled(3)}
                />
                <Input {...register(`backup.policy.enabled`)} type="checkbox" />
              </Container>

              <Container>
                <Input
                  {...register(`backup.restoration.description`)}
                  type="text"
                  placeholder="Descrição (Opcional)"
                  label="Teste de restauração"
                  helperText={errors.backup?.restoration?.description?.message}
                  style={isEnabled(4)}
                  disabled={!!isEnabled(4)}
                />
                <Input
                  {...register(`backup.restoration.score`, {
                    valueAsNumber: true,
                  })}
                  label="Pontuação"
                  type="number"
                  helperText={errors.backup?.restoration?.score?.message}
                  style={isEnabled(4)}
                  disabled={!!isEnabled(4)}
                />
                <Input
                  {...register(`backup.restoration.enabled`)}
                  type="checkbox"
                />
              </Container>
              <button type="submit" disabled={!haveBackup}>
                Validate
              </button>
            </>
          )}

          <button onClick={handleNext} disabled={!formValidate}>
            Next
          </button>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormBackup;
