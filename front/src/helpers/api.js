import axios from "axios";

const host = 'localhost';

export const axiosAuth = axios.create({
    baseURL: `http://${host}:5000/auth`,
    mode: 'no-cors',
    cache: 'default'
});
export const axiosApi = axios.create({
    baseURL: `http://${host}:5000/api`,
    mode: 'no-cors',
    cache: 'default'
});