import { calledApi } from "../../utils/requestApi";

// Função para enviar dados para a API
export const DataForm = async (data: any) => {
  try {
    // Adicione as informações adicionais aos dados do formulário
    const allData = {
      client: "657a021673b480d28f63e6ea", // Exemplo: ID do cliente
      ...data,
    };
    console.log(allData);

    console.log("Dados enviados com sucesso!");
  } catch (error: any) {
    console.error("Erro ao enviar dados para a API:", error.message);
    throw error;
  }
};

// export default DataForm;
// export const DataBackup = (bkp?: FormBackupProps) => {
//   console.log(bkp?.backup.restoration.score);
//   return bkp;
// };

// export const DataServer = (data?: FormServerProps) => {
//   console.log(data?.server.servers[0].serverName);
//   return data;
// };
