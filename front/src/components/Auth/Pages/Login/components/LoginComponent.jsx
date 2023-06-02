import { useContext, useEffect, useState } from 'react';
import "../styles.css";
import { useForm } from '../../../../../hooks/useForm';
import { loginAPI } from '../../../../../helpers/auth';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Alert } from '../../../ui/Alert';
import { CrecerLibreContext } from '../../../../../context/crecerlibreContext';

export const LoginComponent = () => {
    const navigate = useNavigate();
    const [msgStatus, setMsgStatus] = useState(null);
    const {user, setUser} = useContext(CrecerLibreContext);
    const [value, handleInputChange] = useForm({
        username: '',
        password: ''
    })

    const { username, password } = value;

    // const loggedIn = JSON.parse(Cookies.get('isAuthenticated'));
    useEffect(() => {
      if (user.isAuthenticated === true) {
        navigate('/admin'); // Redirige al usuario a la página principal
      }
    }, []);


    const handleLogin = (e) => {
        e.preventDefault();

        loginAPI({ username, password }).then((auth) => {
            if (auth.status === 200) {
                Cookies.set('id', JSON.stringify(auth.data.id));
                Cookies.set('username', JSON.stringify(auth.data.username));
                Cookies.set('role', JSON.stringify(auth.data.role));
                Cookies.set('accessToken', JSON.stringify(auth.data.accessToken));
                Cookies.set('isAuthenticated', JSON.stringify(true));
                setUser({
                    id: auth.data.id,
                    username: auth.data.username,
                    role: auth.data.role,
                    accessToken: auth.data.accessToken,
                    isAuthenticated: true
                });

                setMsgStatus(auth.status);
                setTimeout(() => {
                    navigate('/admin');
                }, 3000)
            }
            if (auth.status === 500) {
                setMsgStatus(auth.status);
            }
        })
        .catch(() => {
            setMsgStatus(auth.status);
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
