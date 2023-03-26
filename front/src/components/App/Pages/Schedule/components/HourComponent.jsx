import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const HourComponent = () => {

    const navigate = useNavigate();
    
    const scheduleTime = () => {
        console.log("Agendar Hora");
    
        navigate('./confirmar');
    
    }

    return (
        <div className='hour-component'>
            <div className='hour-hour'>
                <p>10:30 Viernes 13 Abril</p>
            </div>
            <div className='hour-schedule'>
                <span 
                    className="material-symbols-outlined"
                    onClick={scheduleTime}
                >
                    today
                </span>
            </div>
        </div>
    )
}
