import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    headers: {
        "X-Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`
    }
});

export default api;