import React, { useState } from 'react'
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import "./styles.css";
import { ListHourComponent } from './components/ListHourComponent';

export const HourPage = () => {

  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSelectedDateTime(value);
  };

  return (
    <div className='container mx-auto hour-page'>
      <div className='hour-create'>
        <h3 className='title-operation'>Crear hora</h3>
        <hr />
        <form>
          <p className='format-rut mt-3'>Debes ingresar Fecha y Hora.</p>
          <input
            type="datetime-local"
            id="fechaHora"
            name="fechaHora"
            onChange={handleDateTimeChange}
          />
          <button>Crear hora</button>
        </form>
      </div>
      <div className='hour-list'>
      <h3 className='title-operation'>Listar horas</h3>
        <hr />
        <ListHourComponent />
      </div>
    </div>
  )
}
