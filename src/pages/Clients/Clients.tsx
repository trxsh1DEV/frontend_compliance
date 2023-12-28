import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "preact/hooks";
import { requestWithToken } from "../../utils/requestApi";
import { formatDateString } from "../../utils/formatDate";
import { FormRegisterProps } from "../../types/typesForm";
// import { columns } from "./DataClients";
import { Box } from "@mui/material";
import CustomModal from "../../components/Modal/Modal";
import { Actions, DivButton, Image } from "./styled";
import { Link } from "react-router-dom";
import "./test.css";
import { toast } from "react-toastify";
import { Plus } from "phosphor-react";

export default function Clients() {
  const [data, setData] = useState<[FormRegisterProps]>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState("");

  const columns: GridColDef[] = [
    { field: "_id", type: "string", headerName: "ID", width: 60 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 80,
      align: "center",
      renderCell: (params) => {
        return (
          <img
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
    { field: "name", type: "string", headerName: "Nome cliente", width: 150 },
    { field: "email", type: "string", headerName: "email", width: 200 },
    {
      field: "social_reason",
      type: "string",
      headerName: "Razão Social",
      width: 180,
    },
    { field: "createdAt", type: "string", headerName: "Criado Em", width: 120 },
    {
      field: "isAdmin",
      type: "boolean",
      headerName: "Admin?",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <Actions className="action">
            <Link to={`/clients/${params.row._id}`}>
              <DivButton>
                <Image src="view.svg" alt="" />
              </DivButton>
            </Link>

            <DivButton
              className="edit"
              onClick={() => handleEdit(params.row._id)}
            >
              <Image src="edit.svg" alt="" />
            </DivButton>
            <DivButton
              className="delete"
              onClick={() => handleDelete(params.row._id)}
            >
              <Image src="delete.svg" alt="" />
            </DivButton>
          </Actions>
        );
      },
    },
  ];

  const handleEdit = (id: string) => {
    setId(id);
    setModalIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await requestWithToken.delete(`clients/${id}`);
      toast.success("Cliente deletado com sucesso");
    } catch (err: any) {
      toast.error(
        `Falha ao deletar usuário - ${err?.response?.data?.errors[0]}`
      );
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await requestWithToken.get("clients");
        setData(res.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [data]);

  if (!data) return null;
  const rowsId = data.map((clients, i) => ({
    ...clients,
    id: clients._id || i,
    createdAt: formatDateString(clients.createdAt),
  }));

  return (
    <Box width="100%">
      <DataGrid
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
      <div>
        <Link to="/register">
          <Plus />
        </Link>
      </div>
      {modalIsOpen && (
        <CustomModal isOpen={modalIsOpen} onClose={handleCloseModal} id={id} />
      )}
    </Box>
  );
}
