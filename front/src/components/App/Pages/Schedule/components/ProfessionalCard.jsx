import {useState, useEffect} from 'react';
import '../styles.css';
import profile from '../../../../../assets/profile.jpg';
import { ListHoursComponent } from './ListHoursComponent';

export const ProfessionalCard = () => {



    return (
        <div className='professional-card'>
            <img src={profile} alt="image" />

            <div className='professional-description'>
                <h3>Makarena Estay</h3>
                <h5>Profesora Diferencial</h5>
            </div>

            <div className='professinal-diary'>
                <ListHoursComponent />
            </div>
        </div>
    )
}
