import axios from "axios";

const token = localStorage.getItem("accessToken");

const customAxios = axios.create({
  baseURL: "http://52.78.246.108:8080",

  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default customAxios;
