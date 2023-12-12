import { useForm } from "react-hook-form";
import "./style.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Plus, Minus } from "phosphor-react";
import { useState } from "preact/hooks";
import { schema } from "../../utils/schemaForm";
import { handleSubmitFormulary } from "./SubmitComponent";
import Input from "../Input/Input";

type FormDataProps = z.infer<typeof schema>;

export const Formulary1 = ({ nextStep, setData }) => {
  const [formValidated, setFormValidated] = useState(false);

  const handleSubmitForm = async (data: FormDataProps) => {
    handleSubmitFormulary(data, setFormValidated, setData);
  };

  const handleNext = () => {
    nextStep();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <div className="app">
      <div>
        <h2>Form 1</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {/* ... outros campos do formulário ... */}

          {/* Exemplo de uso do componente Input */}
          <Input
            label="Description"
            name="backup.policy.description"
            type="text"
            register={register}
            error={errors?.backup?.policy}
          />

          {/* Repita para outros campos conforme necessário */}

          {errors.backup && errors.backup.message}

          <button className={`send`} type="submit">
            Validar
          </button>
          <button
            onClick={handleNext}
            className={`next ${formValidated ? "form-validated" : ""}`}
            disabled={!formValidated}
          >
            Próximo
          </button>
        </form>
      </div>
    </div>
  );
};
