import './ui.css'

export const Alert = ({ status }) => {
    return (
        <>
            {
                (status === 201) &&
                <div className='alert-auth-success animate__animated animate__bounceIn'>
                    <span>Crear registro</span>
                    <p>Registro exitoso.</p>
                </div>
            }

            {
                (status === 500) &&
                <div className='alert-auth-error animate__animated animate__bounceIn'>
                    <span>Crear registro</span>
                    <p>Error al registrar.</p>
                </div>
            }
        </>
    )
}
