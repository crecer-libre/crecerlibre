import React from 'react';
import "../styles.css";

export const LoginComponent = () => {
  return (
    <div className='login'>
        <div className='login-crecerlibre'>
            <h3>Crecer Libre</h3>
            <p>“Todas las personas Podemos cambiar el mundo”</p>

        </div>  
        <div className='login-form'>
            <div className='login-form-input'>
                <input type="text" className='login-input' placeholder='Nombre de usuario'/>
            </div>
            <div className='login-form-input'>
                <input type="text" className='login-input' placeholder='Contraseña'/>
            </div>

            <button>Iniciar sesión</button>
        </div>
    </div>
  )
}
