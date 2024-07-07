import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.DEV ? "http://127.0.0.1:8000/api" : "https://nekobox.fun/api"
})