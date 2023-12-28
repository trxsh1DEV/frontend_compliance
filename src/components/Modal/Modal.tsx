import { FC, useEffect, useState } from "react";
import { Modal, Box } from "@mui/material";
import { requestWithToken } from "../../utils/requestApi";
import { TypeUsers } from "../../types/typeUsers";
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
  name: z.string().min(6),
  social_reason: z.string(),
  isAdmin: z.boolean().optional(),
});

const CustomModal: FC<CustomModalProps> = ({ isOpen, onClose, id }) => {
  const [data, setData] = useState<TypeUsers>();

  const onSubmit = async (data: any) => {
    try {
      await requestWithToken.patch(`clients/${id}`, data);
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
        const res = await requestWithToken.get(`clients/${id}`);
        setData(res.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [id, data]);
  if (!data) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      email: data?.email,
      name: data?.name,
      isAdmin: data?.isAdmin,
      social_reason: data.social_reason,
    },
  });

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
          {...register("social_reason")}
          label="Razão social"
          helperText={errors?.social_reason?.message}
        />

        <Input
          {...register("isAdmin")}
          type="checkbox"
          label="Administrador?"
          helperText={errors?.isAdmin?.message}
        />
      </Container>

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
