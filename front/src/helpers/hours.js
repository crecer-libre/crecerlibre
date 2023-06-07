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

export const getProfessionalHoursAPI = async (token) => {
    try {
        const resp = await axiosApi.get('/hours/professional-hours', {
            headers: {
                'Authorization': token
            }
        });
        const { status, data } = resp;

        console.log(data.hours);
    
        return { status, data };
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
};

export const getHourByIdAPI = async (id) => {
    try {
        const resp = await axiosApi.get('/hours/' + id);
        const { status, data } = resp;
        return { status, data };
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

export const createHourAPI = async (obj) => {
    try {
        const resp = await axiosApi.post('/hours/create', obj);
        const { status, data } = resp;
        return { status, data: data.msg };
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}