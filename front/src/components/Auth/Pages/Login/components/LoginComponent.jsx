import { useContext, useState } from 'react';
import "../styles.css";
import { useForm } from '../../../../../hooks/useForm';
import { loginAPI } from '../../../../../helpers/auth';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../../ui/Alert';
import { CrecerLibreContext } from '../../../../../context/crecerlibreContext';

export const LoginComponent = () => {
    const navigate = useNavigate();
    const [msgStatus, setMsgStatus] = useState(null);
    const {setUser} = useContext(CrecerLibreContext);
    const [value, handleInputChange] = useForm({
        username: '',
        password: ''
    })

    const { username, password } = value;

    const handleLogin = (e) => {
        e.preventDefault();

        loginAPI({ username, password }).then((auth) => {
            if (auth.status === 200) {
                console.log('login successful', auth.data);
                
                setUser({
                    id: auth.data.id,
                    username: auth.data.username,
                    role: auth.data.role,
                    accessToken: auth.data.accessToken
                });

                setMsgStatus(auth.status);
                setTimeout(() => {
                    navigate('/admin');
                }, 3000)
            }
            if (auth.status === 500) {
                console.log('login error');
                setMsgStatus(auth.status);
            }
        });
    }

    return (
        <>
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
                        <button type="submit" onClick={handleLogin}>Iniciar sesión</button>
                    </form>
                </div>
            </div>

            {
                (msgStatus === 200) && <Alert status={msgStatus}/>
            }
            {
                (msgStatus === 500) && <Alert status={msgStatus}/>
            }
        </>
    )
}
