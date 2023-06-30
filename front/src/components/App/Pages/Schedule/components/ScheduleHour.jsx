import { useEffect, useState } from 'react';

//archivos estaticos
import profile from '../../../../../assets/profile.jpg';
import man from '../../../../../assets/avatar_man.png';
import woman from '../../../../../assets/avatar_woman.png';
import "../styles.css";
import { getStudentByRutAPI, registerStudentAPI } from '../../../../../helpers/students';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHourByIdAPI, scheduleHourAPI } from '../../../../../helpers/hours';
import { PopUpComponent } from './PopUpComponent';
import { RegisterComponent } from './RegisterComponent';
import { formatearFecha, validarNombreApellido, validarNumeroCelularChileno, validarRut } from '../../../../../helpers/functions';
import { RegisterStudentComponent } from './RegisterStudentComponent';
import { useForm } from '../../../../../hooks/useForm';
import { AccountBank } from './AccountBank';


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
    const [validationsForm, setValidationsForm] = useState({
        rutValidation: '',
        nameValidation: '',
        phoneValidation: ''
    });
    const [value, handleInputChange] = useForm({
        rutForm: '',
        nameForm: '',
        emailForm: '',
        phoneForm: ''
    });
    const [studentCreate, setStudentCreate] = useState(null);

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

    const handleOnCreateStudent = (e) => {
        e.preventDefault();

        console.log('create student!');

        if (value.rutForm === '' || value.nameForm === '' || value.emailForm === '' || value.phoneForm === '') {
            return;
        } else {
            if (validarRut(value.rutForm.trim()) === false) {
                setTimeout(() => {
                    setValidationsForm(prevState => ({
                        ...prevState,
                        rutValidation: 'Run invalido.'
                    }));
                }, 3000);
            } else if (validarNumeroCelularChileno(value.phoneForm.trim()) === false) {
                setTimeout(() => {
                    setValidationsForm(prevState => ({
                        ...prevState,
                        phoneValidation: 'Teléfono invalido.'
                    }));
                }, 3000);
            } else if (value.nameForm === '') {
                setTimeout(() => {
                    setValidationsForm(prevState => ({
                        ...prevState,
                        nameValidation: 'Debes ingresar nombre y apellido.'
                    }));
                }, 3000);
            }
            else {

                const obj = {
                    rut: value.rutForm,
                    name: value.nameForm,
                    email: value.emailForm,
                    phone: value.phoneForm
                }

                registerStudentAPI(obj)
                    .then((std) => {
                        console.log(std);
                        if (std.status === 201) {
                            setStudentCreate('Registro existoso.')
                            setTimeout(() => { setShowModal(false) }, 3000);
                            return;
                        };

                        if (std.status === 500) return setStudentCreate('Error de registro.');
                    })
                    .catch((error) => setStudentCreate('Error, comuniquese con el administrador.'));
            }
        }

    }

    return (
        <>
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
                            <div className='modal-register animate__animated animate__flipInX'>
                                <h3>Registrate</h3>
                                <form>
                                    <input placeholder="Rut" value={value.rutForm} type="text" name="rutForm" onChange={handleInputChange} />
                                    {(validationsForm.rutValidation !== '') && <p>Rut invalido</p>}
                                    <input placeholder="Nombre completo" value={value.nameForm} type="text" name="nameForm" onChange={handleInputChange} />
                                    {(validationsForm.nameValidation !== '') && <p>Ingresa tu nombre y apellido</p>}
                                    <input placeholder="Correo electrónico" value={value.emailForm} type="email" name="emailForm" onChange={handleInputChange} />
                                    <input placeholder="Teléfono" value={value.phoneForm} type="text" name="phoneForm" onChange={handleInputChange} />
                                    {(validationsForm.phoneValidation !== '') && <p>Teléfono invalido</p>}
                                    <div className='form-buttons'>
                                        <button onClick={handleOnCreateStudent} type="submit">Registrarse</button>
                                    </div>
                                </form>
                                <button className="back-button" type="submit" onClick={() => setShowModal(false)}>Cancelar</button>
                                <span className='p-form'>{studentCreate}</span>
                            </div>
                        ) : null}

                        <button onClick={scheduler} className="mt-3 p-2 rounded-full bg-green text-white text-lg">Agendar</button>

                    </div>
                </div>

            </div>
            <AccountBank />
        </>
    )
}
