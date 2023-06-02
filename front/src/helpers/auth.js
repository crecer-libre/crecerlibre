import { axiosApi } from "./api";

export const loginAPI = async (obj) => {
    try {
        const resp = await axiosApi.post('/auth/login', obj);
        const { status, data } = resp;

        return { data, status };
    } catch (error) {
        return {
            data: 'Error al iniciar sesión.',
            status: 500
        }
    }
}

export const createProfessionalAPI = async (obj) => {
    try {
        const resp = await axiosApi.post('/auth/register', obj);
        const { status, data } = resp;
        return { status, data: data.msg };
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}

export const logoutAPI = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}