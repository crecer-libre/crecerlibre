import { axiosApi } from "./api";

export const getStudentsAPI = async () => {
    try {
        const resp = await axiosApi.get('/students');
        const { status, data } = resp;
        return { status, data};
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
};

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

export const registerStudentAPI = async (obj) => {
    try {

        console.log(obj);
        const resp = await axiosApi.post('/students/register', obj);
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