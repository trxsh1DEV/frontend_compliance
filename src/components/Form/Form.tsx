import { FormContainer, MainContainer } from "../Input/style";
import { Input } from "../Input/Input";
import { Container } from "../Input/styles";
import { FC } from "react";
import useFormulary from "./useFormulary";

const FormBackup: FC<{ nextStep: () => void }> = ({ nextStep }) => {
  const {
    errors,
    formValidate,
    handleFormSubmit,
    handleNext,
    handleSubmit,
    register,
    test,
  } = useFormulary({ nextStep });

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <h2 style={{ marginBottom: "2rem" }}>Formulário Backup</h2>
          <Container>
            <Input
              {...register(`backup.frequency.description`)}
              type="text"
              placeholder="Descrição (Opcional)"
              label="Frequencia de Backup"
              helperText={errors.backup?.frequency?.description?.message}
              style={test(0)}
              disabled={!!test(0)}
            />
            <Input
              {...register(`backup.frequency.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.frequency?.score?.message}
              style={test(0)}
              disabled={!!test(0)}
            />

            <Input {...register(`backup.frequency.enabled`)} type="checkbox" />
          </Container>

          <Container>
            <Input
              {...register(`backup.policy.description`)}
              type="text"
              placeholder="Descrição (Opcional)"
              label="Politicas de Backup"
              helperText={errors.backup?.policy?.description?.message}
              style={test(1)}
              disabled={!!test(1)}
            />
            <Input
              {...register(`backup.policy.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.policy?.score?.message}
              style={test(1)}
              disabled={!!test(1)}
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
              style={test(2)}
              disabled={!!test(2)}
            />
            <Input
              {...register(`backup.restoration.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.restoration?.score?.message}
              style={test(2)}
              disabled={!!test(2)}
            />
            <Input
              {...register(`backup.restoration.enabled`)}
              type="checkbox"
            />
          </Container>

          <Container>
            <Input
              {...register(`backup.storage.local.description`)}
              type="text"
              placeholder="Descrição (Opcional)"
              label="Backup Local"
              helperText={errors.backup?.storage?.local?.description?.message}
              style={test(3)}
              disabled={!!test(3)}
            />
            <Input
              {...register(`backup.storage.local.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.storage?.local?.score?.message}
              style={test(3)}
              disabled={!!test(3)}
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
              helperText={errors.backup?.storage?.remote?.description?.message}
              style={test(4)}
              disabled={!!test(4)}
            />
            <Input
              {...register(`backup.storage.remote.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.storage?.remote?.score?.message}
              style={test(4)}
              disabled={!!test(4)}
            />
            <Input
              {...register(`backup.storage.remote.enabled`)}
              type="checkbox"
            />
          </Container>

          <button type="submit">Send</button>
          <button onClick={handleNext} disabled={!formValidate}>
            next
          </button>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormBackup;
