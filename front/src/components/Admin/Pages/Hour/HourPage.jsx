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
      <div className='hour-list'>
      <h3 className='title-operation'>Listar horas</h3>
        <hr />
        <ListHourComponent />
      </div>
    </div>
  )
}
