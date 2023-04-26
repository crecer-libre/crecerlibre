import {useState, useEffect} from 'react';
import '../styles.css';
import profile from '../../../../../assets/profile.jpg';
import { ListHoursComponent } from './ListHoursComponent';

export const ProfessionalCard = ({proHour}) => {



    return (
        <div className='professional-card'>
            <img src={profile} alt="image" />

            <div className='professional-description'>
                <h3>{proHour.professional.name}</h3>
                <h5>{proHour.professional.position}</h5>
            </div>

            <div className='professinal-diary'>
                <ListHoursComponent />
            </div>
        </div>
    )
}
