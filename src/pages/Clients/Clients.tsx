import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "preact/hooks";
import { requestWithToken } from "../../utils/requestApi";
import { formatDateString } from "../../utils/formatDate";
import { FormRegisterProps } from "../../types/typesForm";
import { columns } from "./DataClients";

export default function Clients() {
  const [data, setData] = useState<[FormRegisterProps]>();

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
  }, []);

  if (!data) return null;
  const rowsId = data.map((clients, i) => ({
    ...clients,
    id: clients._id || i,
    createdAt: formatDateString(clients.createdAt),
  }));

  return (
    // <Box width="100%">
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
    // </Box>
  );
}
