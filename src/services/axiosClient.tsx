import axios from "axios";
const apiUrl = "http://localhost/noteTakingAPI/request";

export const api = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
});

export default api;