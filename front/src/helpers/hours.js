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