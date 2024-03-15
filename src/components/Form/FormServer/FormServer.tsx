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
import { TextArea } from "../../Input/TextArea";
import { HelperText, InputContent, Label } from "../../Input/styles";
import { Controller } from "react-hook-form";
import { customStyles, multipleOption } from "../../../utils/data/dataUtil";
import ReactSelect from "react-select";

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
    isEnabled,
    control,
    fields,
    remove,
    isEditable,
  } = useFormulary({ nextStep, setFormValues, data, id });

  const isEditMode = () => (!!data && !isEditable ? true : false);

  // console.log(fields.map((item) => console.log(item)));

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
              {fields.map((item, index) => (
                <div key={item.id}>
                  <Container>
                    <Input
                      {...register(`server.servers.${index}.hostname.text`)}
                      helperText={
                        errors.server?.servers?.[index]?.hostname?.text?.message
                      }
                      label="Hostname"
                    />
                    <InputContent>
                      <Label htmlFor={"score-0" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.hostname.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-0" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode()}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.hostname?.score
                            ?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...(register(`server.servers.${index}.memory.size`),
                      {
                        valueAsNumber: true,
                      })}
                      type="number"
                      helperText={
                        errors.server?.servers?.[index]?.memory?.size?.message
                      }
                      label="Memória RAM (GB)?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-1" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.memory.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-1" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode()}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.memory?.score
                            ?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(`server.servers.${index}.processor.text`)}
                      helperText={
                        errors.server?.servers?.[index]?.processor?.text
                          ?.message
                      }
                      label="Qual Processador/CPU?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-2" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.processor.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-2" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode()}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.processor?.score
                            ?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(`server.servers.${index}.storage.qtde`, {
                        valueAsNumber: true,
                      })}
                      type="number"
                      helperText={
                        errors.server?.servers?.[index]?.storage?.qtde?.message
                      }
                      label="Quantidade de discos"
                    />
                    <Input
                      {...register(`server.servers.${index}.storage.size`, {
                        valueAsNumber: true,
                      })}
                      type="number"
                      helperText={
                        errors.server?.servers?.[index]?.storage?.size?.message
                      }
                      label="Armazenamento Total"
                    />
                  </Container>

                  <InputContent>
                    <Label htmlFor={"score-3" + item.id}>
                      Maturidade Storage
                    </Label>
                    <Controller
                      name={`server.servers.${index}.storage.score`}
                      control={control}
                      render={({ field }) => (
                        <ReactSelect
                          name={field.name}
                          inputId={"score-3" + item.id}
                          options={multipleOption}
                          onChange={(val: any) => field.onChange(val.value)}
                          styles={customStyles}
                          isDisabled={isEditMode()}
                          defaultValue={multipleOption[0]}
                        />
                      )}
                    />
                    <HelperText>
                      {errors.server?.servers?.[index]?.storage?.score?.message}
                    </HelperText>
                  </InputContent>

                  <Container>
                    <Input
                      {...register(`server.servers.${index}.raid.enabled`)}
                      type="checkbox"
                      helperText={
                        errors.server?.servers?.[index]?.raid?.enabled?.message
                      }
                      label="Discos em RAID?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-5" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.raid.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-5" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode() || isEnabled(index, 1)}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {errors.server?.servers?.[index]?.raid?.score?.message}
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(
                        `server.servers.${index}.cal_access.enabled`
                      )}
                      type="checkbox"
                      helperText={
                        errors.server?.servers?.[index]?.cal_access?.enabled
                          ?.message
                      }
                      label="Possui CAL?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-4" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.cal_access.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-4" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode() || isEnabled(index, 0)}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.cal_access?.score
                            ?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(
                        `server.servers.${index}.license_so.enabled`
                      )}
                      type="checkbox"
                      helperText={
                        errors.server?.servers?.[index]?.license_so?.enabled
                          ?.message
                      }
                      label="Servidor Licenciado?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-6" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.license_so.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-6" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode() || isEnabled(index, 2)}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.license_so?.score
                            ?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(`server.servers.${index}.update_so.enabled`)}
                      type="checkbox"
                      helperText={
                        errors.server?.servers?.[index]?.update_so?.enabled
                          ?.message
                      }
                      label="SO Atualizado?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-7" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.update_so.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-7" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode() || isEnabled(index, 3)}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.update_so?.score
                            ?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(
                        `server.servers.${index}.high_availability.enabled`
                      )}
                      type="checkbox"
                      helperText={
                        errors.server?.servers?.[index]?.high_availability
                          ?.enabled?.message
                      }
                      label="Alta Disponibilidade?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-8" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.high_availability.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-8" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode() || isEnabled(index, 4)}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.high_availability
                            ?.score?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(`server.servers.${index}.antivirus.enabled`)}
                      type="checkbox"
                      helperText={
                        errors.server?.servers?.[index]?.antivirus?.enabled
                          ?.message
                      }
                      label="Possui Antivirus?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-9" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.antivirus.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-9" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode() || isEnabled(index, 5)}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.antivirus?.score
                            ?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(`server.servers.${index}.backup.enabled`)}
                      type="checkbox"
                      helperText={
                        errors.server?.servers?.[index]?.backup?.enabled
                          ?.message
                      }
                      label="Possui Backup?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-10" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.backup.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-10" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode() || isEnabled(index, 6)}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.backup?.score
                            ?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(
                        `server.servers.${index}.monitoring.enabled`
                      )}
                      type="checkbox"
                      helperText={
                        errors.server?.servers?.[index]?.monitoring?.enabled
                          ?.message
                      }
                      label="Possui Monitoramento?"
                    />
                    <InputContent>
                      <Label htmlFor={"score-11" + item.id}>Maturidade</Label>
                      <Controller
                        name={`server.servers.${index}.monitoring.score`}
                        control={control}
                        render={({ field }) => (
                          <ReactSelect
                            name={field.name}
                            inputId={"score-11" + item.id}
                            options={multipleOption}
                            onChange={(val: any) => field.onChange(val.value)}
                            styles={customStyles}
                            isDisabled={isEditMode() || isEnabled(index, 7)}
                            defaultValue={multipleOption[0]}
                          />
                        )}
                      />
                      <HelperText>
                        {
                          errors.server?.servers?.[index]?.monitoring?.score
                            ?.message
                        }
                      </HelperText>
                    </InputContent>
                  </Container>

                  <Container>
                    <Input
                      {...register(`server.servers.${index}.warranty.enabled`)}
                      type="checkbox"
                      helperText={
                        errors.server?.servers?.[index]?.warranty?.enabled
                          ?.message
                      }
                      label="Possui Garantia?"
                    />

                    <Input
                      {...register(
                        `server.servers.${index}.warranty.expired_at`
                      )}
                      type="date"
                      min={new Date().toLocaleDateString("en-CA")}
                      helperText={
                        errors.server?.servers?.[index]?.warranty?.expired_at
                          ?.message
                      }
                      disabled={isEditMode() || isEnabled(index, 8)}
                      label="Licença (Expira em)?"
                    />
                  </Container>
                  <InputContent>
                    <Label htmlFor={"score-12" + item.id}>Maturidade</Label>
                    <Controller
                      name={`server.servers.${index}.warranty.score`}
                      control={control}
                      render={({ field }) => (
                        <ReactSelect
                          name={field.name}
                          inputId={"score-12" + item.id}
                          options={multipleOption}
                          onChange={(val: any) => field.onChange(val.value)}
                          styles={customStyles}
                          isDisabled={isEditMode() || isEnabled(index, 8)}
                          defaultValue={multipleOption[0]}
                        />
                      )}
                    />
                    <HelperText>
                      {
                        errors.server?.servers?.[index]?.warranty?.score
                          ?.message
                      }
                    </HelperText>
                  </InputContent>

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
                <TextArea
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
                onClick={() => {
                  return append({
                    memory: {
                      size: 0,
                      score: 0,
                    },
                    antivirus: {
                      enabled: false,
                      score: 0,
                    },
                    backup: {
                      enabled: false,
                      score: 0,
                    },
                    cal_access: {
                      enabled: false,
                      score: 0,
                    },
                    high_availability: {
                      enabled: false,
                      score: 0,
                    },
                    hostname: {
                      score: 0,
                      text: "",
                    },
                    license_so: {
                      enabled: false,
                      score: 0,
                    },
                    monitoring: {
                      enabled: false,
                      score: 0,
                    },
                    processor: {
                      text: "",
                      score: 0,
                    },
                    raid: {
                      enabled: false,
                      score: 0,
                    },
                    storage: {
                      qtde: 1,
                      size: 80,
                      score: 0,
                    },
                    update_so: {
                      enabled: false,
                      score: 0,
                    },
                    warranty: {
                      enabled: false,
                      expired_at: new Date(),
                      score: 0,
                    },
                    description: "",
                  });
                }}
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
                {data ? <span>Salvar</span> : <span>Validar</span>}
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
