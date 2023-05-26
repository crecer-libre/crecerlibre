import React, { useContext, useEffect, useState } from 'react'
import { getProfessionalHoursAPI } from '../../../../../helpers/hours';
import { CrecerLibreContext } from '../../../../../context/crecerlibreContext';

export const ListHourComponent = () => {
    const {user} = useContext(CrecerLibreContext);
    const [hours, setHours] = useState([]);
    const [errorList, setErrorList] = useState('');

    useEffect(() => {
        getProfessionalHoursAPI(user.accessToken)
            .then((h) => {
                if (h.status !== 200) return setErrorList('Error al mostrar horas. Intentelo más tarde.');
                setHours(h.data.hours);
            })
        return () => {
            setHours([]);
        }
    }, []);

    return (
        <div>
            {
                (hours.length === 0) ? 
                <div>
                    No hay horas registradas.
                </div>
                :
                hours.map((hour) => (
                    <div key={hour._id}>
                        
                    </div>
                ))
            }
        </div>
    )
}
