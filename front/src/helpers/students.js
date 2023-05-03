import { axiosApi } from "./api";

export const getStudentByRutAPI = async (rut) => {
    try {
        const resp = await axiosApi.get('/students/' + rut);
        const { status, data } = resp;
        return { status, data: data.msg };
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
};

export const getHourByIdAPI = async (id) => {
    try {
        const resp = await axiosApi.get('/' + id);
        const { status, data } = resp;
        const { proHour } = data;
        return { status, data: proHour };
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}