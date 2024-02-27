import axios from "axios";
export const baseURL = `https://spam-mailer-api.vercel.app/api`;
export const API = axios.create({ baseURL: baseURL });
