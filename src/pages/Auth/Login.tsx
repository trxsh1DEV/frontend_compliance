import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Container, FormContainer, Title } from "./styled";
import { requestWithToken } from "../../utils/requestApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../components/Input/Input";
import Cookie from "js-cookie";

const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z
    .string()
    .min(8, "A senha deve conter mais de 8 caracteres")
    .max(30, "A senha deve conter menos de 30 caracteres"),
});
type FormLoginType = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginType>({
    resolver: zodResolver(schema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await requestWithToken.post("auth/login", data);
      Cookie.set("token", res.data.token, { expires: 1 });
      location.href = "/";
    } catch (err: any) {
      console.log(err.response.data.errors[0]);
      toast.error(`Erro ao tentar se conectar: ${err.response.data.errors[0]}`);
    }
  };

  return (
    <>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>Log-in</Title>
          <Input
            {...register("email")}
            label="Digite seu e-mail"
            placeholder="ex: usuario@mybusiness.com.br"
            helperText={errors.email?.message}
          />
          <Input
            {...register("password")}
            type="password"
            label="Digite sua senha"
            placeholder="Insira sua senha de acesso"
            helperText={errors.password?.message}
          />

          <Button type="submit">Entrar</Button>
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
