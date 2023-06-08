import axios from "axios";

const remotehost = '44.204.124.49';
const localhost = 'localhost';

export const axiosApi = axios.create({
    baseURL: `http://${localhost}:5000/api`,
    mode: 'no-cors',
    cache: 'default'
});