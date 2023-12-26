import {
  FormContainer,
  MainContainer,
  Container,
  Heading2,
  ButtonContent,
} from "../style";
import { Input } from "../../Input/Input";
import { FC } from "react";
import useFormulary from "../FormServer/useFormServer";
import { Minus, Plus } from "phosphor-react";
import { FormularyProps } from "../../../types/typesForm";
import { Button } from "@mui/material";

const FormServer: FC<FormularyProps> = ({ nextStep, setFormValues }) => {
  const {
    errors,
    formValidate,
    handleFormSubmit,
    handleNext,
    handleSubmit,
    register,
    haveServer,
    append,
    fields,
    remove,
    monitoringServer,
  } = useFormulary({ nextStep, setFormValues });

  const hasServer = !!haveServer;

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Servidor</Heading2>
          <Input
            {...register(`server.enabled`)}
            type="checkbox"
            label="Tem servidor(es)?"
          />

          {hasServer && (
            <>
              {fields.map((field, index) => (
                <div key={field.id}>
                  <Container>
                    <Input
                      {...register(`server.servers.${index}.serverName`)}
                      type="text"
                      placeholder="Digite o nome do servidor"
                      label="Hostname do servidor"
                      helperText={
                        errors.server?.servers?.[index]?.serverName?.message
                      }
                    />
                  </Container>
                  <Container>
                    <Input
                      {...register(`server.servers.${index}.config.level`)}
                      type="text"
                      placeholder="low | medium | high"
                      label="Hardware do servidor?"
                      helperText={
                        errors.server?.servers?.[index]?.config?.level?.message
                      }
                    />
                    <Input
                      {...register(`server.servers.${index}.config.score`, {
                        valueAsNumber: true,
                      })}
                      key={field.id}
                      label="Quantos pontos?"
                      type="number"
                      helperText={
                        errors.server?.servers?.[index]?.config?.score?.message
                      }
                    />
                  </Container>
                  <Container>
                    <Input
                      {...register(
                        `server.servers.${index}.monitoringPerfomance.enabled`
                      )}
                      type="checkbox"
                      label="Tem monitoramento"
                    />
                    <Input
                      {...register(
                        `server.servers.${index}.monitoringPerfomance.score`,
                        {
                          valueAsNumber: true,
                        }
                      )}
                      type="number"
                      label="Quantos pontos?"
                      helperText={
                        errors.server?.servers?.[index]?.monitoringPerfomance
                          ?.score?.message
                      }
                      disabled={!monitoringServer(index)}
                    />
                  </Container>
                  <Container>
                    <Input
                      {...register(
                        `server.servers.${index}.systemOperation.patching`
                      )}
                      type="text"
                      placeholder="Regular | Irregular"
                      label="Updates do SO"
                      helperText={
                        errors.server?.servers?.[index]?.systemOperation
                          ?.patching?.message
                      }
                    />
                    <Input
                      {...register(
                        `server.servers.${index}.systemOperation.score`,
                        {
                          valueAsNumber: true,
                        }
                      )}
                      label="Quantos pontos?"
                      type="number"
                      helperText={
                        errors.server?.servers?.[index]?.systemOperation?.score
                          ?.message
                      }
                    />
                  </Container>
                  <Container>
                    <Input
                      {...register(`server.servers.${index}.description`)}
                      type="text"
                      placeholder="Insira uma descrição (Opciona)"
                      label="Descrição"
                      helperText={
                        errors.server?.servers?.[index]?.description?.message
                      }
                    />
                    <Input
                      {...register(`server.servers.${index}.score`, {
                        valueAsNumber: true,
                      })}
                      label="Pontuação geral do servidor"
                      type="number"
                      helperText={
                        errors.server?.servers?.[index]?.score?.message
                      }
                    />
                  </Container>
                  <Container>
                    <button
                      style={{ marginTop: "2rem" }}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      <Minus />
                    </button>
                  </Container>
                </div>
              ))}
              <button
                type="button"
                className="add"
                onClick={() =>
                  append({
                    monitoringPerfomance: {
                      enabled: false,
                      score: 0,
                    },
                    config: {
                      level: "low",
                      score: 0,
                    },
                    systemOperation: {
                      patching: "Regular",
                      score: 0,
                    },
                    serverName: "",
                    score: 0,
                    description: "",
                  })
                }
              >
                <Plus />
              </button>
            </>
          )}

          <ButtonContent>
            <button type="submit" disabled={!haveServer}>
              Send
            </button>
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
          </ButtonContent>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormServer;
