import React, { useContext, useEffect, useState } from 'react'
import { getHoursByProfessionalAPI, getProfessionalHoursAPI } from '../../../../../helpers/hours';
import { CrecerLibreContext } from '../../../../../context/crecerlibreContext';
import { TableHourComponent } from './TableHourComponent';

export const ListHourComponent = () => {
    const { user } = useContext(CrecerLibreContext);
    const [hours, setHours] = useState([]);
    const [errorList, setErrorList] = useState('');

    useEffect(() => {

        //validation list for admin
        if (user.role === 'ADMIN_ROLE') {
            getProfessionalHoursAPI(user.accessToken)
            .then((h) => {
                if (h.status !== 200) return setErrorList('Error al mostrar horas. Intentelo más tarde.');
                setHours(h.data.hours);
            })
            .catch(() => {
                setHours([]);
                setErrorList('Error al mostrar horas. Intentelo más tarde.');
            })
        }

        //validation list for professional
        if (user.role === 'PROFESSIONAL_ROLE') {
            getHoursByProfessionalAPI(user.id)
            .then((h) => {
                    console.log(user);
                    console.log(h)

                    if(h.status !== 200) return setErrorList('Error al mostrar horas. Intentelo más tarde.');
                    setHours(h.data.hours);
                })
                .catch(() => {
                    setHours([]);
                    setErrorList('Error al mostrar horas. Intentelo más tarde.');
                });
        }

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
                    <TableHourComponent />
            }
        </div>
    )
}
