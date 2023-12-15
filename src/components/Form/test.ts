// import { calledApi } from "../../utils/requestApi";

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
