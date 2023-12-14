import { useForm, FormProvider, useFormContext } from "react-hook-form";

// Componente para os campos do primeiro formulário
const Step1 = () => {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data) => {
    console.log("Dados do Formulário 1:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome:
        <input {...register("nome", { required: "Campo obrigatório" })} />
      </label>
      <br />
      <label>
        Email:
        <input {...register("email", { required: "Campo obrigatório" })} />
      </label>
      <br />
      <button type="submit">Próxima Etapa</button>
    </form>
  );
};

// Componente para os campos do segundo formulário
const Step2 = () => {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data) => {
    console.log("Dados do Formulário 2:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Idade:
        <input {...register("idade", { required: "Campo obrigatório" })} />
      </label>
      <br />
      <label>
        Endereço:
        <input {...register("endereco", { required: "Campo obrigatório" })} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

// Componente principal que renderiza os passos do formulário
const MultiStepForm = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log("Dados finais:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Step1 />
        <Step2 />
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
