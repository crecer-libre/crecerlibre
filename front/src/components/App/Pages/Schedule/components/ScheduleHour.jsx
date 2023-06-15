import { useEffect, useState } from 'react';

//archivos estaticos
import profile from '../../../../../assets/profile.jpg';
import man from '../../../../../assets/avatar_man.png';
import woman from '../../../../../assets/avatar_woman.png';
import "../styles.css";
import { getStudentByRutAPI } from '../../../../../helpers/students';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHourByIdAPI, scheduleHourAPI } from '../../../../../helpers/hours';
import { PopUpComponent } from './PopUpComponent';
import { RegisterComponent } from './RegisterComponent';
import { formatearFecha } from '../../../../../helpers/functions';
import { RegisterStudentComponent } from './RegisterStudentComponent';


export const ScheduleHour = () => {

    const nagivate = useNavigate();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [rut, setRut] = useState('');
    const [hour, setHour] = useState();
    const [professional, setProfessional] = useState(null);
    const [studentFound, setStudentFound] = useState(null);
    const [scheduleMsg, setScheduleMsg] = useState({
        status: null,
        msg: ''
    });


    useEffect(() => {
        getHourByIdAPI(id)
            .then((h) => {
                console.log(h);
                if (h.status === 500) return;
                const { hour, professional } = h.data.proHour;
                setHour(hour);
                setProfessional(professional);
            });
    }, []);

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
                    setShowModal(true)
                    return;
                };

                if (student.status == 200) {
                    const obj = { idHour: id, rut };
                    scheduleHourAPI(obj).then((schedule) => {
                        console.log(schedule);
                        if (schedule.status == 200) {

                            setScheduleMsg({
                                status: 200,
                                msg: schedule.data
                            });
                            setTimeout(() => {
                                nagivate('/');
                            }, 4000);
                        }

                        if (schedule.status == 500) {
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
        <div className="schedule-hour animate__animated animate__fadeIn">
            <div className='schedule-hour-professional'>
                {
                    (professional?.gender === 'F') ? <img src={woman} alt="" /> : <img src={man} alt="" />
                }
                <div className='bg-skyBlue mt-3 p-3'>
                    <p className='text-3xl text-white'>{professional?.name}</p>
                    <p className='text-lg text-white'>{professional?.position}</p>
                </div>
            </div>
            <div className='schedule-hour-info'>
                <h3>Información Agenda</h3>

                <div className='schedule-hour-info-detail'>
                    <p className='text-lg'>Fecha</p>
                    <p className='text-3xl'>{formatearFecha(hour?.date)}</p>

                    <div className='schedule-input'>
                        <p>Rut Alumno</p>
                        <input
                            type="text"
                            placeholder='99.999.999-9'
                            onChange={onChangeRut}
                        />
                    </div>

                    {
                        (scheduleMsg.status == 200) && <PopUpComponent obgMsg={scheduleMsg} />
                    }
                    {
                        (scheduleMsg.status == 500) && <PopUpComponent obgMsg={scheduleMsg} />
                    }
                    {showModal ? (
                        <div className='modal-register'>
                            <form>
                                <div className='span-input'>
                                    <span>Rut</span>
                                    <input type="text" name="rut" />
                                </div>
                                <div>
                                    <span>Nombre completo</span>
                                    <input type="text" name="name" />
                                </div>
                                <div>
                                    <span>Correo electrónico</span>
                                    <input type="email" name="email" />
                                </div>
                                <div>
                                    <span>Teléfono</span>
                                    <input type="text" name="phone" />
                                </div>
                                <div className='form-buttons'>
                                    <button type="submit" onClick={() => setShowModal(false)}>Cancelar</button>
                                    <button type="submit">Registrarse</button>
                                </div>
                            </form>
                        </div>
                    ) : null}

                    <button onClick={scheduler} className="mt-3 p-2 rounded-full bg-green text-white text-lg">Agendar</button>
                </div>
            </div>
        </div>
    )
}
