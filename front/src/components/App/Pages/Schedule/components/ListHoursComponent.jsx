import { HourComponent } from './HourComponent';

export const ListHoursComponent = ({ hours }) => {
    return (
        <div className='list-hours'>
            <h5>Horarios disponibles</h5>

            <div className='list-hours-component'>
                {
                    hours.map((h) => (
                        <HourComponent
                            key={h.id}
                            hour={h}
                        />
                    ))
                }
            </div>
        </div>
    )
}
