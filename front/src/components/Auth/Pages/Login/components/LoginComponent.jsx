import { useState } from 'react';
import "../styles.css";
import { useForm } from '../../../../../hooks/useForm';
import { loginAPI } from '../../../../../helpers/auth';
import { useNavigate } from 'react-router-dom';

export const LoginComponent = () => {
    const navigate = useNavigate();
    const [msgStatus, setMsgStatus] = useState(null);
    const [value, handleInputChange] = useForm({
        username: '',
        password: ''
    })

    const { username, password } = value;

    const handleLogin = (e) => {
        e.prevenDefault();

        loginAPI({username, password}).then(( auth ) => {
            if(auth.status === 200){
                setMsgStatus(auth.status);
            }
            if(auth.status === 500){
                setMsgStatus(auth.status);
            }
        });
    }

    return (
        <div className='login'>
            <div className='login-crecerlibre'>
                <h3>Crecer Libre</h3>
                <p>“Todas las personas Podemos cambiar el mundo”</p>

            </div>
            <div className='login-form'>
                <form>
                    <div className='login-form-input'>
                        <input
                            type="text"
                            className='login-input'
                            placeholder='Nombre de usuario'
                            name='username'
                            value={username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='login-form-input'>
                        <input
                            type="text"
                            className='login-input'
                            placeholder='Contraseña'
                            name='password'
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button onSubmit={handleLogin}>Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}
