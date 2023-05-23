


import React from 'react'
import { useForm } from '../../../../../hooks/useForm';
import { createProfessionalAPI } from '../../../../../helpers/auth';

export const CreateProfessional = () => {
    const [value, handleInputChange] = useForm({
        name: '',
        username: '',
        password: '',
        position: '',
      });
    
      const {
        name,
        username,
        password,
        position,
        gender } = value;
    
      const handleCreateProfessional = (e) => {
        e.preventDefault();
        
        const professional = {
          name,
          username,
          password,
          position,
          role: 'PROFESSIONAL_ROLE',
          gender
        };
    

        createProfessionalAPI(professional)
          .then((p) => {
            console.log(p);
            
          })
      };
    return (
        <div className='operation'>
            <h3 className='title-operation'>crear profesionales</h3>
            <hr />

            <div className='operation-create-list'>
                <div className='operation-create'>
                    <form>
                        <input type="text" value={name} name="name" onChange={handleInputChange} placeholder='Nombre profesional' />
                        <input type="text" value={username} name="username" onChange={handleInputChange} placeholder='Nombre de usuario' />
                        <input type="text" value={password} name="password" onChange={handleInputChange} placeholder='Contraseña' />
                        <input type="text" value={position} name="position" onChange={handleInputChange} placeholder='Cargo' />
                        <select id="gender" value={gender} name="gender" onChange={handleInputChange}>
                            <option value="N/A">Seleccionar genero</option>
                            <option value="F">Femenino</option>
                            <option value="M">Masculino</option>
                        </select>
                        <button type="submit" onClick={handleCreateProfessional}>Crear profesional</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
