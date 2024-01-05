import {
  FormContainer,
  MainContainer,
  Container,
  Heading2,
  ButtonContent,
} from "../styleForm";
import { Input } from "../../Input/Input";
import { FC } from "react";
import useFormulary from "../FormServer/useFormServer";
import { Minus, Plus } from "phosphor-react";
import { FormularyProps } from "../../../types/typesForm";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";

const FormServer: FC<FormularyProps> = ({
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
    haveServer,
    append,
    fields,
    remove,
    monitoringServer,
    isEditable,
  } = useFormulary({ nextStep, setFormValues, data, id });

  const isEditMode = () => (!!data && !isEditable ? true : false);

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

          {haveServer && (
            <>
              {fields.map((field, index) => (
                <div key={field.id}>
                  <Container>
                    <Input
                      {...register(`server.servers.${index}.serverName`)}
                      type="text"
                      placeholder="Digite o nome do servidor"
                      label="Hostname do servidor"
                      disabled={isEditMode()}
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
                      disabled={isEditMode()}
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
                      disabled={isEditMode()}
                      type="number"
                      helperText={
                        errors.server?.servers?.[index]?.config?.score?.message
                      }
                    />
                  </Container>
                  <Container>
                    <Input
                      {...register(
                        `server.servers.${index}.monitoringPerformance.enabled`
                      )}
                      type="checkbox"
                      label="Tem monitoramento"
                      disabled={isEditMode()}
                    />
                    <Input
                      {...register(
                        `server.servers.${index}.monitoringPerformance.score`,
                        {
                          valueAsNumber: true,
                        }
                      )}
                      type="number"
                      label="Quantos pontos?"
                      disabled={isEditMode() || !monitoringServer(index)}
                      helperText={
                        errors.server?.servers?.[index]?.monitoringPerformance
                          ?.score?.message
                      }
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
                      disabled={isEditMode()}
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
                      disabled={isEditMode()}
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
                      label="Descrição servidor"
                      disabled={isEditMode()}
                      helperText={
                        errors.server?.servers?.[index]?.description?.message
                      }
                    />
                    <Input
                      {...register(`server.servers.${index}.score`, {
                        valueAsNumber: true,
                      })}
                      label="Pontuação Geral"
                      disabled={isEditMode()}
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
              <Container>
                <Input
                  {...register(`server.description`)}
                  type="text"
                  placeholder="Anotações de todos os servidores"
                  label="Descrição Geral"
                  helperText={errors.server?.description?.message}
                  disabled={isEditMode()}
                />
              </Container>
              <button
                type="button"
                className="add"
                onClick={() =>
                  append({
                    monitoringPerformance: {
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
          {data && (
            <Input
              {...register(`server.isEditable`)}
              type="checkbox"
              helperText={errors.server?.isEditable?.message}
              label="Deseja Editar?"
            />
          )}
          <ButtonContent>
            {!isEditMode() && (
              <button type="submit" disabled={!haveServer}>
                Validate
              </button>
            )}
            {!data && (
              <Button
                size="large"
                sx={{ fontSize: "24px" }}
                color="success"
                variant="contained"
                onClick={handleNext}
                disabled={!formValidate}
              >
                <Send fontSize="inherit" />
              </Button>
            )}
          </ButtonContent>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormServer;
