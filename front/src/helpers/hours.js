import { axiosApi } from "./api";

export const getProfessionalsHoursAPI = async () => {
    try {
        const resp = await axiosApi.get('/hours');
        const { status, data } = resp;
        const { hoursList } = data;
        return { status, data: hoursList };
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

export const scheduleHourAPI = async (obj) => {
    try {
        const resp = await axiosApi.put('/hours/schedule', obj);
        const { status, data } = resp;
        return { status, data: data.msg };
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}