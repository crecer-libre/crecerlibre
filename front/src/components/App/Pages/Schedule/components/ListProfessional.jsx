import {useState} from 'react'
import { ProfessionalCard } from './ProfessionalCard';

export const ListProfessional = () => {
    
    const [professionals, setProfessionals] = useState([1,2,3,4,5,6,7,8]);
    
    return (
        <div className='list-professional'>
            {
                professionals.map((p, index) => (
                    <ProfessionalCard 
                        key={index}
                    />
                ))
            }
        </div>
    )
}
