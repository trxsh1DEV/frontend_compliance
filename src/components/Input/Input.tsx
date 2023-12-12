import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DefaultValues, schema } from "../../utils/schemaForm";
import { FormDataProps } from "../../types/typesForm";
import "../AddCompliance/style.css";
import { FormContainer, MainContainer } from "./style";
import { Input } from "./InputNew";
import { Container } from "./styles";
import { handleFormSubmit } from "../../utils/requestApi";

export default function InputPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: DefaultValues,
  });

  // const isEnabled = watch('backup.frequ');
  const isEnabled = watch([
    "backup.frequency.enabled",
    "backup.policy.enabled",
    "backup.restoration.enabled",
    "backup.storage.local.enabled",
    "backup.storage.remote.enabled",
  ]);

  console.log(isEnabled[0]);

  const test = (n: any) => {
    return isEnabled[n];
  };

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <h2 style={{ marginBottom: "2rem" }}>Formulário Backup</h2>
          <Container>
            <Input
              {...register(`backup.frequency.description`)}
              type="text"
              placeholder="Frequencia"
              label="Frequencia de Backup"
              helperText={errors.backup?.frequency?.description?.message}
              style={!isEnabled[0] ? {} : { backgroundColor: "red" }}
            />
            <Input
              {...register(`backup.frequency.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.frequency?.score?.message}
            />

            <Input {...register(`backup.frequency.enabled`)} type="checkbox" />
          </Container>

          <Container>
            <Input
              {...register(`backup.policy.description`)}
              type="text"
              placeholder="Politica"
              label="Politicas de Backup"
              helperText={errors.backup?.policy?.description?.message}
            />
            <Input
              {...register(`backup.policy.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.policy?.score?.message}
            />
            <Input {...register(`backup.policy.enabled`)} type="checkbox" />
          </Container>

          <Container>
            <Input
              {...register(`backup.restoration.description`)}
              type="text"
              placeholder="Restauração"
              label="Teste de restauração"
              helperText={errors.backup?.restoration?.description?.message}
            />
            <Input
              {...register(`backup.restoration.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.restoration?.score?.message}
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
              placeholder="Backup Local"
              label="Backup Local"
              helperText={errors.backup?.storage?.local?.description?.message}
            />
            <Input
              {...register(`backup.storage.local.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.storage?.local?.score?.message}
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
              placeholder="Backup Remoto"
              label="Backup Remoto"
              helperText={errors.backup?.storage?.remote?.description?.message}
            />
            <Input
              {...register(`backup.storage.remote.score`, {
                valueAsNumber: true,
              })}
              type="number"
              helperText={errors.backup?.storage?.remote?.score?.message}
            />
            <Input
              {...register(`backup.storage.remote.enabled`)}
              type="checkbox"
            />
          </Container>

          <button type="submit">Send</button>
        </FormContainer>
      </MainContainer>
    </>
  );
}
