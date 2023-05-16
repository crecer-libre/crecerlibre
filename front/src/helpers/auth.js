import { axiosApi } from "./api";

export const loginAPI = async (obj) => {
    try {
        const resp = await axiosApi.post('/auth/login', obj);
        const { status, data } = resp;

        localStorage.setItem('user', JSON.stringify(data.username));
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));

        return { data, status };
    } catch (error) {
        return {
            data: 'Error al iniciar sesión.',
            status: 500
        }
    }
}

export const registerAPI = (obj) => { 
    try {
        
    } catch (error) {
        
    }
}

export const logoutAPI = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}