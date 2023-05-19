import { axiosApi } from "./api";


export const getProfessionalsAPI = async () => {
    try {

        const resp = await axiosApi.get('/professionals');
        const {status, data} = resp;
        return {status, data}

    } catch (error) {
        return {
            status: 500,
            msg: 'Actualmente no podemos mostrar a los profesionales.'
        }
    }
};