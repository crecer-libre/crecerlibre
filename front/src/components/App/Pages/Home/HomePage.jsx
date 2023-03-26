import './styles.css';
import React from 'react'
import { Carousel } from '../../ui/Carousel'

export const HomePage = () => {
  return (
    <div className='home-page'>
      <Carousel />
    
      <h3 className='text-center text-white text-xl title'>Actividades para nuestros Alumnos</h3>
    </div>
  )
}
