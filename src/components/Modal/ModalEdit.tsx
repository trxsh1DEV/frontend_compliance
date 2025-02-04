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
import { schemaRegister } from "../../utils/Schemas/schemaFormRegister";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: () => void;
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

type FieldsClient = z.infer<typeof schemaRegister>;

const ModalEditUser: FC<CustomModalProps> = ({
  isOpen,
  onClose,
  id,
  onUpdate,
}) => {
  const [data, setData] = useState<FieldsClient>();

  const onSubmit = async (data: any) => {
    try {
      await requestWithToken.patch(`admin/clients/${id}`, data);
      toast.success("Cliente atualizado com sucesso!");
      // Chame a função onUpdate fornecida por Clients para atualizar os dados
      onUpdate();
      onClose();
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
        toast.error(
          `Erro ao buscar dados do usuário: ${error?.response?.data?.errors[0]}`
        );
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [id]);
  if (!data) return null;
  data.typeContract;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: zodResolver(schemaRegister),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      email: data?.email || "",
      name: data?.name || "",
      isAdmin: data?.isAdmin || false,
      social_reason: data?.social_reason || "",
      criticalProblems: data?.criticalProblems || false,
      cnpj: data?.cnpj || "",
      contact: data?.contact || "",
      typeContract: data?.typeContract || "",
      urls: data?.urls || {
        url_inventory: "",
        url_kickoff: "",
        url_runbook: "",
        url_tickets: "",
      },
    },
  });

  useEffect(() => {
    setFocus("name");
  }, []);

  const Form = (
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
        <Input
          {...register("typeContract")}
          placeholder="Avulso ou Fixo"
          label="Tipo de contrato"
          helperText={errors.social_reason?.message}
        />
      </Container>

      <Container>
        <Input
          {...register("urls.url_inventory")}
          label="Administrador?"
          helperText={errors?.isAdmin?.message}
        />
        <Input
          {...register("urls.url_tickets")}
          label="Tem problemas críticos?"
          helperText={errors?.criticalProblems?.message}
        />
      </Container>
      <Container>
        <Input
          {...register("urls.url_runbook")}
          label="Administrador?"
          helperText={errors?.isAdmin?.message}
        />
        <Input
          {...register("urls.url_kickoff")}
          label="Tem problemas críticos?"
          helperText={errors?.criticalProblems?.message}
        />
      </Container>

      <Container>
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
        <Box sx={style}>{Form}</Box>
      </Modal>
    </>
  );
};

export default ModalEditUser;
