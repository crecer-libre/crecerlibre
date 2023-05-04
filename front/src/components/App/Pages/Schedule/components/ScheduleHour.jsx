import {useEffect, useState} from 'react';

//archivos estaticos
import profile from '../../../../../assets/profile.jpg';
import "../styles.css";
import { getStudentByRutAPI } from '../../../../../helpers/students';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { scheduleHourAPI } from '../../../../../helpers/hours';
import { PopUpComponent } from './PopUpComponent';
import { RegisterComponent } from './RegisterComponent';


export const ScheduleHour = () => {

    const nagivate = useNavigate();
    const {id} = useParams();
    const [rut, setRut] = useState('');
    const [studentFound, setStudentFound] = useState();
    const [scheduleMsg, setScheduleMsg] = useState({
        status: null,
        msg: ''
    });

    useEffect(() => {
        console.log('scheduleMsg cambio!');
    }, [scheduleMsg])

    const scheduler = () => {
        console.log("Agendar!");

        //Validar si el rut existe en base de datos
        if (rut.trim() === '') {
            console.log('RUT VACIO');
            return;
        }

        if (rut.trim() !== '') {
            getStudentByRutAPI(rut).then((student) => {
                console.log(student);
                if (student.status == 500) {
                    setStudentFound(false);
                    return;
                };

                if(student.status == 200) {
                    const obj = {id, rut};
                    scheduleHourAPI(obj).then((schedule) => {
                        console.log(schedule);
                        if(schedule.status == 200){
                            
                            setScheduleMsg({
                                status: 200,
                                msg: schedule.data
                            });
                            setTimeout(() => {
                                nagivate('/');
                            }, 4000);
                        }

                        if(schedule.status == 500){
                            console.log(schedule);
                            setScheduleMsg({
                                status: 500,
                                msg: schedule.data
                            });
                        }
                    });
                }
            });
        }

    }

    const onChangeRut = (e) => {
        const value = e.target.value;
        setRut(value);
    };

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
                            onChange={onChangeRut}
                        />
                    </div>
                    
                    {
                        (scheduleMsg.status == 200) && <PopUpComponent obgMsg={scheduleMsg}/> 
                    }
                    {
                        (scheduleMsg.status == 500) && <PopUpComponent obgMsg={scheduleMsg}/> 
                    }
                    {
                        (studentFound == false) && <RegisterComponent />
                    }
                    

                    <button onClick={scheduler} className="mt-3 p-2 rounded-full bg-green text-white text-lg">Agendar</button>
                </div>
            </div>
        </div>
    )
}
