import axios from "axios";

const api = () => {
  const token = localStorage.getItem("accessToken");

  const SigninCustomAxios = axios.create({
    baseURL: "http://algosipeosseong.site",
  });

  const CustomAxios = axios.create({
    baseURL: "http://algosipeosseong.site",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return { SigninCustomAxios, CustomAxios };
};

export default api;
