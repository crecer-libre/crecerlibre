import React from 'react'
import { ObservationComponent } from './ObservationComponent'
import { formatearFecha } from '../../../../../helpers/functions'

export const TableHourListComponent = ({ hours }) => {
    return (
        <>
            {
                hours.map((h) => (
                    
                    <tr key={h.hour.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" >
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {h.professional}
                        </th>
                        <td className="px-6 py-4">
                            {(h.student) ? h.student : 'N/A'}
                        </td>
                        <td className="px-6 py-4">
                            {formatearFecha(h.hour.date)}
                        </td>
                        <td className="px-6 py-4">
                            {(h.hour.status === 'HORA_DISPONIBLE') && 'Hora disponible'}
                            {(h.hour.status === 'HORA_TOMADA') && 'Hora tomada'}
                            {(h.hour.status === 'HORA_FINALIZADA') && 'Hora finalizada'}
                            {(h.hour.status === 'HORA_EXPIRADA') && 'Hora expirada'}
                        </td>
                        <td className="px-6 py-4">
                            <ObservationComponent id={h.hour.id} observationProp={h.hour?.observation}/>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}
