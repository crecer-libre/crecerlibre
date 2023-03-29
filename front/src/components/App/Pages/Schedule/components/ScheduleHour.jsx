import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

//archivos estaticos
import profile from '../../../../../assets/profile.jpg';
import "../styles.css";
import RegisterComponent from './RegisterComponent';


export const ScheduleHour = () => {

    const navigate = useNavigate();
    const [rut, setRut] = useState(true)

    const scheduler = () => {
        console.log("Agendar!");

        //Validar si el rut existe en base de datos
        if (rut){
            setRut(false);
        }

    }

    return (
        <div className="schedule-hour">
            <div className='schedule-hour-professional'>
                <img src={profile} alt="" />

                <div className='bg-skyBlue mt-3 p-3'>
                    <p className='text-3xl text-white'>Makarena Estay</p>
                    <p className='text-lg text-white'>Cargo: Profesora Diferencial</p>
                </div>
            </div>
            <div className='schedule-hour-info'>
                <h3>Información Agenda</h3>

                <div className='schedule-hour-info-detail'>
                    <p className='text-lg'>Fecha</p>
                    <p className='text-3xl'>Lunes 10 - 18:30 hrs</p>

                    <div className='schedule-input'>
                        <p>Rut Alumno</p>
                        <input 
                            type="text"
                            placeholder='99.999.999-9' 
                        />
                    </div>

                    {
                        (!rut) && <RegisterComponent />
                    }

                    <button onClick={scheduler} className="mt-3 p-2 rounded-full bg-green text-white text-lg">Agendar</button>
                </div>
            </div>
        </div>
    )
}
