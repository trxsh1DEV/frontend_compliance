import { FC, useEffect, useState } from "react";
import { Modal, Box } from "@mui/material";
import requestWithToken from "../../utils/auth/requestApi";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input/Input";
import { Container } from "./styled";
import { FormContainer } from "../Form/styleForm";
import { toast } from "react-toastify";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  // formComponent: React.ReactNode;
  id: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#333",
  border: "2px solid #444",
  boxShadow: 24,
  p: 4,
};

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(6, "Minimo 6 caracteres"),
  social_reason: z.string().optional(),
  // isAdmin: z.boolean(),
  criticalProblems: z.boolean(),
  cnpj: z.string().optional(),
  contact: z.string().optional(),
});

type FieldsClient = z.infer<typeof schema>;

const CustomModal: FC<CustomModalProps> = ({ isOpen, onClose, id }) => {
  const [data, setData] = useState<FieldsClient>();

  const onSubmit = async (data: any) => {
    try {
      await requestWithToken.patch(`admin/clients/${id}`, data);
      toast.success("Cliente atualizado com sucesso!");
    } catch (err: any) {
      toast.error(
        `Falha ao atualizar usuário ${err?.response?.data?.errors[0]}`
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await requestWithToken.get(`admin/clients/${id}`);
        setData(res.data);
      } catch (error: any) {
        toast.error(`Erro ao buscar dados do usuário: ${error.message}`);
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [id]);
  if (!data) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: zodResolver(schema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      email: data?.email || "",
      name: data?.name || "",
      // isAdmin: data?.isAdmin,
      social_reason: data?.social_reason || "",
      criticalProblems: data?.criticalProblems || false,
      cnpj: data?.cnpj || "",
      contact: data?.contact || "",
    },
  });

  useEffect(() => {
    setFocus("name");
  }, []);

  const Formulario = (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Input
          {...register("name")}
          label="Nome da empresa"
          helperText={errors?.name?.message}
        />

        <Input
          {...register("email")}
          label="E-mail"
          helperText={errors?.email?.message}
        />
      </Container>
      <Container>
        <Input
          {...register("cnpj")}
          placeholder="Digite o CNPJ"
          label="CNPJ"
          helperText={errors.cnpj?.message}
        />
        <Input
          {...register("contact")}
          placeholder="Digite um número para contato"
          label="Número para contato"
          helperText={errors.contact?.message}
        />
      </Container>
      <Container>
        <Input
          {...register("social_reason")}
          placeholder="Razão social (opcional)"
          label="Razão social"
          helperText={errors.social_reason?.message}
        />
      </Container>

      {/* <Container>
        <Input
          {...register("isAdmin")}
          type="checkbox"
          label="Administrador?"
          helperText={errors?.isAdmin?.message}
        />
        <Input
          {...register("criticalProblems")}
          label="Tem problemas críticos?"
          helperText={errors?.criticalProblems?.message}
          type="checkbox"
        />
      </Container> */}

      <button type="submit">Salvar</button>
    </FormContainer>
  );
  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="Modal updated of the user"
        aria-describedby="Modal updated of the user"
        key={id}
      >
        <Box sx={style}>{Formulario}</Box>
      </Modal>
    </>
  );
};

export default CustomModal;
