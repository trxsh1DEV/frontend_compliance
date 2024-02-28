import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { z } from "zod";
import { Button, Container, FormContainer, ContainerForm } from "./styled";
import requestWithToken from "../../utils/auth/requestApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { schemaRegister } from "../../utils/Schemas/schemaFormRegister";

type formRegisterType = z.infer<typeof schemaRegister>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formRegisterType>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaRegister),
    defaultValues: {
      name: "",
      confirmPassword: "",
      email: "",
      urls: {
        url_inventory: "",
        url_kickoff: "",
        url_runbook: "",
        url_tickets: "",
      },
      isAdmin: false,
      password: "",
      social_reason: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      delete data.confirmPassword;
      await requestWithToken.post("admin/clients", data);
      toast.success("Cliente cadastrado com sucesso!");
    } catch (err: any) {
      console.log(err.response.data.errors[0].split("x: ")[1]);
      toast.error(`Erro ao cadastrar cliente: ${err.message}`);
    }
  };

  return (
    <>
      <ToastContainer autoClose={2000} theme="dark" />
      <Container>
        {/* <Title>Cadastrar Novo Cliente</Title> */}
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <ContainerForm>
            <Input
              {...register("name")}
              placeholder="Nome da empresa"
              label="Nome do cliente"
              helperText={errors.name?.message}
            />

            <Input
              {...register("email")}
              placeholder="E-mail"
              label="E-mail do cliente"
              helperText={errors.email?.message}
            />

            <Input
              {...register("social_reason")}
              placeholder="Razão social"
              label="Razão social"
              helperText={errors.social_reason?.message}
            />
          </ContainerForm>

          <ContainerForm>
            <Input
              {...register("cnpj")}
              placeholder="Digite o CNPJ"
              label="CNPJ"
              helperText={errors.cnpj?.message}
            />
            <Input
              {...register("contact")}
              placeholder="Digite um número"
              label="Número para contato"
              helperText={errors.contact?.message}
            />
            <Input
              {...register("urls.url_inventory")}
              placeholder="Digite uma URL"
              label="Dashboard de inventários"
              helperText={errors.contact?.message}
            />
          </ContainerForm>

          <ContainerForm>
            <Input
              {...register("urls.url_tickets")}
              placeholder="Digite uma URL"
              label="Dashboard Chamados"
              helperText={errors.urls?.url_tickets?.message}
            />
            <Input
              {...register("urls.url_kickoff")}
              placeholder="Digite uma URL"
              label="URL Kickoff"
              helperText={errors.urls?.url_kickoff?.message}
            />
            <Input
              {...register("urls.url_runbook")}
              placeholder="Digite uma URL"
              label="URL Runbook"
              helperText={errors.urls?.url_runbook?.message}
            />
          </ContainerForm>

          <ContainerForm>
            <Input
              {...register("typeContract")}
              placeholder="Digite Fixo ou Avulso"
              label="Tipo de contrato"
              helperText={errors.typeContract?.message}
            />
            <Input
              {...register("isAdmin")}
              label="É administrador?"
              type="checkbox"
              helperText={errors.isAdmin?.message}
            />
            <Input
              {...register("criticalProblems")}
              label="Tem problemas críticos?"
              type="checkbox"
              helperText={errors.criticalProblems?.message}
            />
          </ContainerForm>

          <Button type="submit">Cadastrar</Button>
        </FormContainer>
      </Container>
    </>
  );
};

export default RegisterForm;
