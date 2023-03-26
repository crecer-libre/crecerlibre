import {useState} from 'react';
import { HourComponent } from './HourComponent';

export const ListHoursComponent = () => {

    const [hoursAvailable, setHoursAvailable] = useState([1,2,3]);

    return (
        <div className='list-hours'>
            <h5>Horarios disponibles</h5>
            {
                hoursAvailable.map((h, index) => (
                    <HourComponent 
                        key={index}
                    />
                ))
            }
        </div>
    )
}
