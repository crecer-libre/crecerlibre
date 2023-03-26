import React from 'react';
import profile from '../../../../../assets/profile.jpg';
import "../styles.css";


export const ScheduleHour = () => {

    const scheduler = () => {
        console.log("Agendar!");
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

                    <button onClick={scheduler} className="mt-3 p-2 rounded-full bg-green text-white text-lg">Agendar</button>
                </div>
            </div>
        </div>
    )
}
