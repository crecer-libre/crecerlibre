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
                setProfessionals([])
            });    

        return () => {
            setProfessionals([]);
        }

    }, [])
    
    return (
        <div className='list-professional'>
            {
                (professionals.length > 0) ? 
                professionals.map((p) => (
                    <ProfessionalCard 
                        key={p.professional.id}
                        proHour={p}
                    />
                ))
                : 'Actualmente no hay horas disponibles.'
            }
        </div>
    )
}
