import axios from "axios";
import UserService from "../../config/keycloakConf";

export const BASE_URL = "http://localhost:5421/";

const requestWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Adiciona um interceptor para atualizar o token em cada requisição
requestWithToken.interceptors.request.use(
  async (config) => {
    try {
      const token = UserService.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        throw new Error("Usuário não autenticado.");
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requestWithToken;
