import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminPage } from '../Pages/Admin/AdminPage'
import { NavBar } from '../ui/NavBar'
import { ProfessionalPage } from '../Pages/Professional/ProfessionalPage'
import { StudentPage } from '../Pages/Student/StudentPage'
import { HourPage } from '../Pages/Hour/HourPage'

export const AdminRouter = () => {
  return (
    <div className='app'>
      <NavBar />
      <div className='container mx-auto mt-6 p-5'>
        <Routes>
          <Route path='/' element={<AdminPage />} />
          <Route path='/profesionales' element={<ProfessionalPage />} />
          <Route path='/estudiantes' element={<StudentPage />} />
          <Route path='/hora' element={<HourPage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
