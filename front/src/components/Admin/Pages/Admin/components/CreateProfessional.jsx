import { useState } from 'react'
import { useForm } from '../../../../../hooks/useForm';
import { createProfessionalAPI } from '../../../../../helpers/auth';
import { useNavigate } from 'react-router-dom';

export const CreateProfessional = () => {
  const [value, handleInputChange] = useForm({
    name: '',
    username: '',
    password: '',
    position: '',
  });

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [errorCreate, setErrorCreate] = useState('');
  const [successCreate, setSuccessCreate] = useState('');

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

    if (name.trim() === '' || username.trim() === '' || password.trim() === '' || position.trim() === '' || gender.trim() === '') {
      setError('Todos los campos son obligatorios.');
      return;
    } else {
      createProfessionalAPI(professional)
        .then((p) => {
          console.log(p);

          if (p.status === 201){
            setSuccessCreate('El profesional fue creado correctamente.');
            setTimeout(() => {
              navigate('./profesionales');
            }, 2000);
          } else {
            setErrorCreate('Error al crear profesional.'); 
            setTimeout(() => {
              setErrorCreate(''); 
            },3000);
          }
        })
        .catch(() => {
          setErrorCreate('Error comuniquese con el administrador.'); 
            setTimeout(() => {
              setErrorCreate(''); 
            },3000);
        })
    }

  };
  return (
    <div className='operation'>
      <h3 className='title-operation'>crear profesionales</h3>
      <hr />

      <div className='operation-create-list'>
        <div className='operation-create'>
          <form>
            <input type="text" required value={name} name="name" onChange={handleInputChange} placeholder='Nombre profesional' />
            <input type="text" required value={username} name="username" onChange={handleInputChange} placeholder='Nombre de usuario' />
            <input type="text" required value={password} name="password" onChange={handleInputChange} placeholder='Contraseña' />
            <input type="text" required value={position} name="position" onChange={handleInputChange} placeholder='Cargo' />
            <select id="gender" value={gender} name="gender" onChange={handleInputChange}>
              <option value="">Seleccionar genero</option>
              <option value="F">Femenino</option>
              <option value="M">Masculino</option>
            </select>
            {
              (error !== '') && <p className='alert-form-error animate__animated animate__bounceIn'>{error}</p>
            }
            {
              (errorCreate !== '') && <p className='alert-form-error animate__animated animate__bounceIn'>{errorCreate}</p>
            }
            {
              (successCreate !== '') && <p className='alert-form-success animate__animated animate__bounceIn'>{successCreate}</p>
            }
            <button type="submit" onClick={handleCreateProfessional}>Crear profesional</button>
          </form>
        </div>
      </div>
    </div>
  )
}
