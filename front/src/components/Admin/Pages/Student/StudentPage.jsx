import { useEffect, useState } from 'react'
import { getStudentsAPI } from '../../../../helpers/students';

export const StudentPage = () => {

  const [students, setStudents] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  }

  const filteredData = students.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    getStudentsAPI()
      .then((s) => {
        if (s.status === 200) {
          console.log(s)
          setStudents(s.data);
        }
      }).catch((error) => {
        setError(error.msg);
      })

    return () => {
      setStudents([]);
    };
  }, [])

  return (
    <>
      {
        (error != null) &&
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{error.msg}</span>
        </div>
      }

      {
        (students.length <= 0) ? 'No hay estudiantes.'
          :


          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="pb-4 bg-white dark:bg-gray-900">
              <label for="table-search" className="sr-only">Search</label>
              <div className="relative mt-1">

                <input value={inputValue} onChange={handleInputChange} type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar por nombre" />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>

                  <th scope="col" className="px-6 py-3">
                    Rut
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombre del estudiante
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Teléfono
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredData.map((s) => (
                    <tr key={s._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {s.rut}
                      </th>
                      <td className="px-6 py-4">
                        {s.name}
                      </td>
                      <td className="px-6 py-4">
                        {s.phone}
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
