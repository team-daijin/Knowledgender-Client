import axios from "axios";

const SigninCustomAxios = axios.create({
  baseURL: "http://52.78.246.108:8080",
});

export default SigninCustomAxios;
