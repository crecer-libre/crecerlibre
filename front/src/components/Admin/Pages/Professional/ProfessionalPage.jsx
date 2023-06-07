import { useEffect, useState } from 'react'
import { getProfessionalsAPI } from '../../../../helpers/professionals';

export const ProfessionalPage = () => {

    const [professionals, setProfessionals] = useState([]);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        getProfessionalsAPI()
            .then((p) => {
                if (p.status === 200) {
                    console.log(p)
                    setProfessionals(p.data);
                }
            }).catch((error) => {
                setError(error.msg);
                setProfessionals([]);
            })

        return () => {
            setProfessionals([]);
        };
    }, [])

    return (
        <>
            {
                (error != null) &&
                <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span class="font-medium">{error.msg}</span>
                </div>
            }

            {
                (professionals.length <= 0) ? 'No hay profesionales'
                    :
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Profesional
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nombre de usuario
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cargo
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Genero
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    professionals.map((p) => (
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={p._id}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {p.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {p.username}
                                            </td>
                                            <td className="px-6 py-4">
                                                {p.position}
                                            </td>
                                            <td className="px-6 py-4">
                                                {
                                                    (p.gender === 'M') ? 'Masculino' : 'Femenino'
                                                }
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
            }
        </>
    )
}
