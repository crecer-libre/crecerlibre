import React from 'react'
import { useForm } from '../../../../../hooks/useForm';
import { registerStudentAPI } from '../../../../../helpers/students';

export const CreateStudent = () => {
    const [value, handleInputChange] = useForm({
        rut: '',
        name: '',
        phone: ''
    });

    const {
        rut,
        name,
        phone} = value;

    const handleCreateStudent = (e) => {
        e.preventDefault();

        const student = {
            rut,
            name,
            phone,
        };

        registerStudentAPI(student)
            .then((s) => {
                console.log(s);
            })
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
                        <button type="submit" onClick={handleCreateStudent}>Crear estudiante</button>
                    </form>
                </div>
            </div>
        </div>
    )
}