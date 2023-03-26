import './styles.css';
import React from 'react';
import { ListProfessional } from './components/ListProfessional';

export const SchedulePage = () => {
  return (
    <div className='container mx-auto'>
      <h5>Agenda tu hora con nuestros Profesionales</h5>
      <ListProfessional />
    </div>
  )
}
