import { useNavigate } from 'react-router-dom';

export const HourComponent = ({hour}) => {

    const navigate = useNavigate();
    
    const scheduleTime = () => {
        console.log("Agendar Hora");
    
        navigate('./' + hour._id);
    
    }

    const hourFormat = new Date(hour.date);

    return (
        <div className='hour-component'>
            <div className='hour-hour'>
                <p>{hourFormat.toLocaleDateString()} {hourFormat.toLocaleTimeString()}</p>
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
