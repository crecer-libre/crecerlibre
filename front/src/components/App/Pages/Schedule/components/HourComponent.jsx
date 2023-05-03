import { useNavigate } from 'react-router-dom';

export const HourComponent = ({hour}) => {
    const navigate = useNavigate();

    const scheduleTime = () => {
        navigate('./' + hour._id);
    }

    const hourFormat = new Date(hour.date);


    return (
        <div className='hour-component'>
            <div className='hour-hour'>
                <p>{hourFormat.toLocaleDateString()} - {hourFormat.getHours() + 4}:{(hourFormat.getMinutes().toLocaleString().length == 1) ? '0'.concat(hourFormat.getMinutes().toLocaleString()) : hourFormat.getMinutes().toLocaleString()}</p>
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
