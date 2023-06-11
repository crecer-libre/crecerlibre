import React from 'react'
import { TableHourListComponent } from './TableHourListComponent'

export const TableHourComponent = ({ hours }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Profesional
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estudiante
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Observación
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <TableHourListComponent hours={hours}/>
                </tbody>
            </table>
        </div>
    )
}
