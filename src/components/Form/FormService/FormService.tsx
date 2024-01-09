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
import { Button } from "@mui/material";

const FormService: FC<FormularyProps> = ({
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
    isEditable,
    haveServices,
  } = useFormulary({ nextStep, setFormValues, data, id });

  const isEditMode = () => (!!data && !isEditable ? true : false);

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading2>Formulário Serviços Outsourcing</Heading2>
          <Input
            {...register(`enabled`)}
            type="checkbox"
            label="Tem serviços terceirizados?"
          />

          {haveServices && (
            <>
              <Container>
                <Input
                  {...register(`servers`)}
                  helperText={errors?.servers?.message}
                  label="Server(s)?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`database`)}
                  helperText={errors?.database?.message}
                  label="Intranet?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`sites`)}
                  helperText={errors?.sites?.message}
                  label="Sites?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>

              <Container>
                <Input
                  {...register(`intranet`)}
                  helperText={errors?.intranet?.message}
                  label="Intranet?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`erp`)}
                  helperText={errors?.erp?.message}
                  label="ERP?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
                <Input
                  {...register(`fileserver`)}
                  helperText={errors?.fileserver?.message}
                  label="File Server?"
                  type="checkbox"
                  disabled={isEditMode()}
                />
              </Container>

              <Container>
                <Input
                  {...register(`score`, {
                    valueAsNumber: true,
                  })}
                  type="number"
                  helperText={errors?.score?.message}
                  label="Pontuação (Score)"
                  disabled={isEditMode()}
                />

                <Input
                  {...register(`description`)}
                  helperText={errors?.description?.message}
                  label="Descrição"
                  placeholder="Descrição"
                  disabled={isEditMode()}
                />
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
                <button type="submit" disabled={!haveServices}>
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

export default FormService;
