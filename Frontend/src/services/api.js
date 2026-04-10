import axios from "axios";

const API = axios.create({
  baseURL: "/api/v1", // This matches your backend prefix
});

export default API;