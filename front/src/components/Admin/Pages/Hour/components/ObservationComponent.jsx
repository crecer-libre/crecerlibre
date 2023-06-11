import { useState } from 'react'
import { useForm } from '../../../../../hooks/useForm'
import "../styles.css";
import { generateObservationByIdAPI } from '../../../../../helpers/hours';

export const ObservationComponent = ({ id, observationProp }) => {

    const [value, handleInputChange] = useForm({ observation: observationProp });
    const [msg, setMsg] = useState('');

    const createObservation = (e) => {
        e.preventDefault();

        generateObservationByIdAPI(id.trim(), { observation: value.observation })
            .then((h) => {
                if (h.status === 500) return setMsg('Error al generar observación.');
                setMsg('Observación generada.');
                setTimeout(() => { setMsg('') }, 3000);
            })
            .catch(() => { setMsg('Error, comuniquese con el administrador.'); })
    }

    return (
        <div className='observation-component'>
            <form className='observation-form'>
                <input
                    type="text"
                    name="observation"
                    value={value.observation}
                    onChange={handleInputChange}
                    placeholder='Ej: Terapia Realizada' />
                <button onClick={createObservation}>Crear</button>
            </form>
            {(msg !== '') && <p className='observation-msg'>{msg}</p>}
        </div>
    )
}
