import { FormContainer, MainContainer, Container, Heading2 } from "../style";
import { Input } from "../../Input/Input";
import { FC } from "react";
import useFormulary from "../FormServer/useFormServer";

const FormServer: FC<{ nextStep: () => void }> = ({ nextStep }) => {
  const {
    errors,
    formValidate,
    handleFormSubmit,
    handleNext,
    handleSubmit,
    register,
    haveServer,
    servers,
  } = useFormulary({ nextStep });

  const hasServer = !!haveServer;
  const monitoringServer = (n: number) => {
    // console.log(servers[n]?.monitoringPerfomance?.enabled);
    return servers[n]?.monitoringPerfomance?.enabled;
  };
  console.log(errors);

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Servidor</Heading2>
          <Input
            {...register(`server.enabled`)}
            type="checkbox"
            label="Tem servidor?"
          />

          {hasServer && (
            <>
              <Container>
                <Input
                  {...register(`server.servers.0.config.level`)}
                  type="text"
                  placeholder="low | medium | high"
                  label="Hardware do servidor?"
                  helperText={
                    errors.server?.servers?.[0]?.config?.level?.message
                  }
                />
                <Input
                  {...register(`server.servers.0.config.score`, {
                    valueAsNumber: true,
                  })}
                  label="Quantos pontos?"
                  type="number"
                  helperText={
                    errors.server?.servers?.[0]?.config?.score?.message
                  }
                />
              </Container>
              <Container>
                <Input
                  {...register(`server.servers.0.monitoringPerfomance.enabled`)}
                  type="checkbox"
                  label="Tem monitoramento"
                />
                <Input
                  {...register(`server.servers.0.monitoringPerfomance.score`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  label="Quantos pontos?"
                  helperText={
                    errors.server?.servers?.[0]?.monitoringPerfomance?.score
                      ?.message
                  }
                  disabled={!monitoringServer(0)}
                />
              </Container>
              <Container>
                <Input
                  {...register(`server.servers.0.systemOperation.patching`)}
                  type="text"
                  placeholder="Regular | Irregular"
                  label="Updates do SO"
                  helperText={
                    errors.server?.servers?.[0]?.systemOperation?.patching
                      ?.message
                  }
                />
                <Input
                  {...register(`server.servers.0.config.score`, {
                    valueAsNumber: true,
                  })}
                  label="Quantos pontos?"
                  type="number"
                  helperText={
                    errors.server?.servers?.[0]?.config?.score?.message
                  }
                />
              </Container>
            </>
          )}

          {/* <Input {...register(`backup.frequency.enabled`)} type="checkbox" /> */}

          <button type="submit">Send</button>
          <button onClick={handleNext} disabled={!formValidate}>
            next
          </button>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormServer;
