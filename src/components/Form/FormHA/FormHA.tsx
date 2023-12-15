import { FormContainer, MainContainer, Container, Heading2 } from "../style";
import { Input } from "../../Input/Input";
import { FC } from "react";
import useFormulary from "./useFormHA";
import { FormularyProps } from "../../../types/typesForm";

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
    refFocus,
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
                  ref={refFocus}
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
                <Input
                  {...register(`ha.solutions`)}
                  type="text"
                  placeholder="redundancy, load balance, failover, cluster, none"
                  label="Soluções de HA"
                  helperText={errors.ha?.solutions?.message}
                />
              </Container>
            </>
          )}
          <button type="submit" disabled={!haveHA}>
            Validate
          </button>
          <button onClick={handleNext} disabled={!formValidate}>
            Next
          </button>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default FormHA;
