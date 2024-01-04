import axios from "axios";
import Cookies from "js-cookie";

export const baseUrl = "http://localhost:5421/api/";

export const requestUserToken = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const requestWithToken = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});
