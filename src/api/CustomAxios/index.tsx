import axios from "axios";

const api = () => {
  const token = localStorage.getItem("accessToken");

  const SigninCustomAxios = axios.create({
    baseURL: "http://52.78.246.108:8080",
  });

  const CustomAxios = axios.create({
    baseURL: "http://52.78.246.108:8080",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return { SigninCustomAxios, CustomAxios };
};

export default api;
