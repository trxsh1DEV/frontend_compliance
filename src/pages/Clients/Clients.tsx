import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "preact/hooks";
import requestWithToken from "../../utils/auth/requestApi";
import { formatDateString } from "../../utils/data/formatDate";
import { FormRegisterProps } from "../../types/typesForm";
import { Box } from "@mui/material";
import CustomModal from "../../components/Modal/ModalEdit";
import { Actions, DivButton, ImageIcon } from "./styled";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UserPlus } from "phosphor-react";
import "./styleClients.css";

type FieldsClient = FormRegisterProps & {
  createdAt: string;
};

export default function Clients() {
  const [data, setData] = useState<[FieldsClient]>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState("");
  // console.log(data);

  const columns: GridColDef[] = [
    { field: "_id", type: "text", headerName: "ID", width: 70 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 90,
      align: "center",
      renderCell: (params) => {
        return (
          <img
            crossorigin="http//localhost:5421"
            src={params.row.avatar || "noavatar.png"}
            alt=""
            style={{
              width: "32px",
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "1px",
            }}
          />
        );
      },
      type: "file",
    },
    { field: "name", type: "text", headerName: "Nome cliente", width: 200 },
    { field: "email", type: "text", headerName: "E-mail", width: 250 },
    {
      field: "social_reason",
      type: "text",
      headerName: "Razão Social",
      width: 180,
    },
    { field: "createdAt", type: "text", headerName: "Criado Em", width: 130 },
    {
      field: "isAdmin",
      type: "boolean",
      headerName: "Admin?",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 220,
      renderCell: (params) => {
        return (
          <Actions className="action">
            <Link to={`/admin/clients/${params.row._id}`}>
              <DivButton>
                <ImageIcon src="../view.svg" alt="" />
              </DivButton>
            </Link>

            <DivButton
              className="edit"
              onClick={() => handleEdit(params.row._id)}
            >
              <ImageIcon src="../edit.svg" alt="" />
            </DivButton>
            <DivButton
              className="delete"
              onClick={() => handleDelete(params.row._id)}
            >
              <ImageIcon src="../delete.svg" alt="" />
            </DivButton>
          </Actions>
        );
      },
    },
  ];

  const fetchData = async () => {
    try {
      const res = await requestWithToken.get("admin/clients");
      setData(res.data);
    } catch (err: any) {
      toast.error(`Erro ao buscar dados: ${err?.response?.data.errors[0]}`);
      console.log(err);
    }
  };

  // const handleUpdateData = (updatedData: any) => {
  //   setData((prevData): any => {
  //     // Encontrar o índice do usuário atualizado
  //     const index = prevData?.findIndex((user) => user._id === updatedData._id);
  //     // Clonar o array de dados
  //     if (index !== -1 && index && prevData) {
  //       // Clonar o array de dados
  //       const newData = [...prevData];
  //       // Substituir os dados antigos pelos novos dados atualizados
  //       newData[index] = updatedData;
  //       return newData;
  //     } else {
  //       // Se o índice for -1, significa que o item não foi encontrado,
  //       // então retornamos os dados existentes sem fazer alterações
  //       return prevData;
  //     }
  //   });
  // };

  const handleEdit = (id: string) => {
    setId(id);
    setModalIsOpen(true);
  };

  // const handleAdd = () => {
  //   setModalIsOpen(true);
  // };

  const handleDelete = async (id: string) => {
    try {
      await requestWithToken.delete(`admin/clients/${id}`);
      toast.success("Cliente deletado com sucesso");
      fetchData();
    } catch (err: any) {
      console.log(err.message);
      toast.error(
        `Falha ao deletar usuário - ${err?.response?.data?.errors[0]}`
      );
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return null;
  const rowsId = data.map((clients, i) => ({
    ...clients,
    id: clients._id || i,
    createdAt: formatDateString(clients.createdAt),
  }));

  return (
    <Box>
      <DataGrid
        style={{ fontSize: "2rem" }}
        rows={rowsId}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        autoHeight={true}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        disableColumnMenu
      />
      <Link to="register">
        <UserPlus size={32} />
      </Link>
      {modalIsOpen && (
        <CustomModal
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
          id={id}
          onUpdate={fetchData}
        />
      )}
    </Box>
  );
}
