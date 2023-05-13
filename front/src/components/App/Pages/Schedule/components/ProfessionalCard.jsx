import { useState, useEffect } from 'react';
import '../styles.css';
import man from '../../../../../assets/avatar_man.png';
import woman from '../../../../../assets/avatar_woman.png';
import { ListHoursComponent } from './ListHoursComponent';


export const ProfessionalCard = ({ proHour }) => {
    return (

        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-sky-400 dark:text-gray-100">
            {
                (proHour.professional.gender === 'M') && <img src={man} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
            }

            {
                (proHour.professional.gender === 'F') && <img src={woman} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
            }


            <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">{proHour.professional.name}</h2>
                    <p className="px-5 text-xs sm:text-base text-white">{proHour.professional.position}</p>
                </div>

                <ListHoursComponent hours={proHour.hours} />
            </div>
        </div>

        // <div className='professional-card'>
        //     {
        //         (proHour.professional.gender === 'M') && <img src={man} alt="image"/>
        //     }

        //     {
        //         (proHour.professional.gender === 'F') && <img src={woman} alt="image"/>
        //     }


        //     <div className='professional-description'>
        //         <h3>{proHour.professional.name}</h3>
        //         <h5>{proHour.professional.position}</h5>
        //     </div>

        // </div>
    )
}
