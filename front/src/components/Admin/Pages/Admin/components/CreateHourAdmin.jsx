import { useEffect, useState } from 'react'
import { useForm } from '../../../../../hooks/useForm';
import { getProfessionalsAPI } from '../../../../../helpers/professionals';
import { createHourAPI } from '../../../../../helpers/hours';
import { Alert } from '../../../ui/Alert';
export const CreateHourAdmin = () => {
    const [professionals, setProfessionals] = useState([]);
    const [professional, setProfessional] = useState(null);
    const [error, setError] = useState(null);
    const [value, handleInputChange] = useForm({ date: '' });
    const {date} = value;

    useEffect(() => {
        getProfessionalsAPI()
            .then((p) => {
                if(p.status !== 200) return ;
                setProfessionals(p.data);
            })  
    }, []);

    const handleProfessional = (e) => {
        const value = e.target.value;
        setProfessional(value);
    }

    const onClick = (e) => {
        e.preventDefault();
        console.log(date, professional);
        const hour = {
            username: professional,
            date
        }
        createHourAPI(hour)
            .then((h) => {
                console.log(h);
                if (h.status === 500) {
                    setError(h.status);
                    setTimeout(() => {
                        setError(null);
                    }, 3000)
                }
                if (h.status === 201) {
                    setError(h.status);
                    setTimeout(() => {
                        setError(null);
                    }, 3000)
                }
            })
            .catch(() => {
                setError(500);
                setTimeout(() => {
                    setError(null);
                }, 3000)
            });
    }

    return (
        <div className='operation'>
            <h3 className='title-operation'>crear horas</h3>
            <hr />

            <div className='operation-create-list'>
                <div className='operation-create'>
                    <form>
                        <select id="professional"  onChange={handleProfessional}>
                            {
                                (professionals.length === 0) ? <option value="">No hay profesionales</option>
                                    :
                                    professionals.map((p) => (
                                        <option key={p._id} value={p.username}>{p.name}</option>
                                    ))
                            }
                        </select>
                        <input
                            type="datetime-local"
                            id="date"
                            name="date"
                            value={date}
                            onChange={handleInputChange}
                        />
                        <button type="submit" onClick={onClick}>Crear hora</button>
                    </form>
                    {
                        (error !== null) && <Alert status={error}/>
                    }
                </div>
            </div>
        </div>
    )
}
