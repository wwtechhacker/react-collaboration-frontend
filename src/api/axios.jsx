import axios from "axios";

import { SERVER_IP, SERVER_PORT } from "../assets/defaultValues";

const api = axios.create({
  baseURL: `http://${SERVER_IP}:${SERVER_PORT}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
