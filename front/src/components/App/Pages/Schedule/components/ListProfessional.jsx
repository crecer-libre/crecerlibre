import {useState, useEffect} from 'react'
import { ProfessionalCard } from './ProfessionalCard';
import { getProfessionalsHoursAPI } from '../../../../../helpers/hours';

export const ListProfessional = () => {
    
    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {

        getProfessionalsHoursAPI()
            .then((hours) => {
                setProfessionals(hours.data);
            })
            .catch((err) => {
                console.log(err);
            });    

        return () => {
            setProfessionals([]);
        }

    }, [])
    
    return (
        <div className='list-professional'>
            {
                professionals.map((p) => (
                    <ProfessionalCard 
                        key={p.professional.id}
                        proHour={p}
                    />
                ))
            }
        </div>
    )
}
