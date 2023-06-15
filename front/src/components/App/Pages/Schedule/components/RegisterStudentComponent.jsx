import React from 'react';
import '../styles.css';

export const RegisterStudentComponent = () => {
  return (
    <form className='modal-register'>
        <div>
            <span>Rut</span>
            <input type="text" name="rut"/>
        </div>
        <div>
            <span>Nombre completo</span>
            <input type="text" name="name"/>
        </div>
        <div>
            <span>Correo electrónico</span>
            <input type="email" name="email"/>
        </div>
        <div>
            <span>Teléfono</span>
            <input type="text" name="phone"/>
        </div>

        <button type="submit">Registrarse</button>
    </form>
  )
}
