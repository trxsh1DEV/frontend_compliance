import { GridColDef } from "@mui/x-data-grid";
import { Actions, DivButton, Image } from "./styled";
import { Link } from "react-router-dom";

export const columns: GridColDef[] = [
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

          <DivButton className="edit" onClick={() => console.log(params.row)}>
            <Image src="edit.svg" alt="" />
          </DivButton>
          <DivButton className="delete" onClick={() => console.log(params.row)}>
            <Image src="delete.svg" alt="" />
          </DivButton>
        </Actions>
      );
    },
  },
];
