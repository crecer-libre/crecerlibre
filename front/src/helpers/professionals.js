import { axiosApi } from "./api";


export const getProfessionals = async () => {
    try {

        const resp = await axiosApi.get('/professionals');
        const professionals = await resp.json();
        const {
            
        } = professionals;

    } catch (error) {
        
    }
};