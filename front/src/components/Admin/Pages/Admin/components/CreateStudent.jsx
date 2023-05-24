import { useState } from 'react'
import { useForm } from '../../../../../hooks/useForm';
import { registerStudentAPI } from '../../../../../helpers/students';
import { useNavigate } from 'react-router-dom';

export const CreateStudent = () => {
    const [value, handleInputChange] = useForm({
        rut: '',
        name: '',
        phone: ''
    });

    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [errorCreate, setErrorCreate] = useState('');
    const [successCreate, setSuccessCreate] = useState('');

    const {
        rut,
        name,
        phone } = value;

    const handleCreateStudent = (e) => {
        e.preventDefault();

        const student = {
            rut,
            name,
            phone,
        };

        if (rut.trim() === '' || name.trim() === '' || phone.trim() === '') {
            setError('Todos los campos son obligatorios.');
            return;
        } else {
            registerStudentAPI(student)
                .then((s) => {
                    console.log(s);

                    if (s.status === 200){
                        setSuccessCreate('Estudiante creado correctamente.');
                        setTimeout(() => {
                          navigate('./estudiantes');
                        }, 2000);
                      } else {
                        setErrorCreate('Error, comuniquese con el administrador.');
                      }

                })

        }

    };
    return (
        <div className='operation'>
            <h3 className='title-operation'>crear estudiantes</h3>
            <hr />

            <div className='operation-create-list'>
                <div className='operation-create'>
                    <form>
                        <input type="text" value={rut} name="rut" onChange={handleInputChange} placeholder='Rut estudiante' />
                        <input type="text" value={name} name="name" onChange={handleInputChange} placeholder='Nombre de estudiante' />
                        <input type="text" value={phone} name="phone" onChange={handleInputChange} placeholder='Teléfono' />
                        {
                            (error !== '') && <p className='alert-form-error animate__animated animate__bounceIn'>{error}</p>
                        }
                        {
                            (errorCreate !== '') && <p className='alert-form-error animate__animated animate__bounceIn'>{errorCreate}</p>
                        }
                        {
                            (successCreate !== '') && <p className='alert-form-success animate__animated animate__bounceIn'>{successCreate}</p>
                        }
                        <button type="submit" onClick={handleCreateStudent}>Crear estudiante</button>
                    </form>
                </div>
            </div>
        </div>
    )
}