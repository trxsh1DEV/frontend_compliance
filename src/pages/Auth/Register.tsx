import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { z } from "zod";
import { Button, Container, FormContainer, FormGroup, Title } from "./styled";
import { requestWithToken } from "../../utils/requestApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve conter mais que 3 caracteres")
      .max(50, "O nome deve conter menos que 50 caracteres"),
    social_reason: z.string().optional(),
    email: z.string().email("E-mail inválido"),
    password: z
      .string()
      .min(8, "A senha deve conter mais de 8 caracteres")
      .max(30, "A senha deve conter menos de 30 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "A senha deve conter mais de 8 caracteres")
      .max(30, "A senha deve conter menos de 30 caracteres"),
    isAdmin: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });

type formRegisterType = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formRegisterType>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      confirmPassword: "",
      email: "",
      isAdmin: false,
      password: "",
      social_reason: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      delete data.confirmPassword;
      await requestWithToken.post("clients", data);
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
        <FormContainer>
          <Title>Register</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Input
                {...register("name")}
                placeholder="Nome da empresa"
                label="Nome do cliente"
                helperText={errors.name?.message}
              />
              <Input
                {...register("social_reason")}
                placeholder="Razão social"
                label="Razão social"
                helperText={errors.social_reason?.message}
              />
            </FormGroup>
            <FormGroup>
              <Input
                {...register("email")}
                placeholder="E-mail"
                label="E-mail do cliente"
                helperText={errors.email?.message}
              />
              <Input
                {...register("password")}
                placeholder="Digite sua senha"
                label="Digite uma senha forte"
                type="password"
                helperText={errors.password?.message}
              />
            </FormGroup>
            <FormGroup>
              <Input
                {...register("confirmPassword")}
                placeholder="Confirme sua senha"
                label="Redigite a sua senha"
                type="password"
                helperText={errors.confirmPassword?.message}
              />
              <Input
                {...register("isAdmin")}
                label="É administrador?"
                type="checkbox"
                helperText={errors.isAdmin?.message}
              />
            </FormGroup>

            <Button type="submit">Cadastrar</Button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default RegisterForm;
