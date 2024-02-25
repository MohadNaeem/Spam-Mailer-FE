import axios from "axios";
export const baseURL = `http://localhost:8000/api`;
export const API = axios.create({ baseURL: baseURL });

