import './ui.css'

export const Alert = ({ status }) => {
    return (
        <>
            {
                (status === 200) &&
                <div className='alert-auth-success animate__animated animate__bounceIn'>
                    <span>Inicio de sesión</span>
                    <p>Has iniciado sesión correctamente.</p>
                </div>
            }

            {
                (status === 500) &&
                <div className='alert-auth-error animate__animated animate__bounceIn'>
                    <span>Inicio de sesión</span>
                    <p>Error al iniciar sesión.</p>
                </div>
            }
        </>
    )
}
