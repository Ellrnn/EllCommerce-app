import axios from "axios";

const API_BASE_URL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1";

export const api = axios.create({ baseURL: API_BASE_URL });
