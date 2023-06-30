import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminPage } from '../Pages/Admin/AdminPage'
import { NavBar } from '../ui/NavBar'
import { ProfessionalPage } from '../Pages/Professional/ProfessionalPage'
import { StudentPage } from '../Pages/Student/StudentPage'
import { HourPage } from '../Pages/Hour/HourPage'
import { ProtectRoutes } from '../../../routes/ProtectRoutes'
import "./styles.css";

export const AdminRouter = () => {
  return (
    <div className='administrator'>
      <NavBar />
      <div className='mx-auto mt-6 p-5'>
        <Routes>
          <Route element={<ProtectRoutes />}>
            <Route path='/' element={<AdminPage />} />
          </Route>
          <Route element={<ProtectRoutes />}>
            <Route path='/profesionales' element={<ProfessionalPage />} />
          </Route>
          <Route element={<ProtectRoutes />}>
            <Route path='/estudiantes' element={<StudentPage />} />
          </Route>
          <Route element={<ProtectRoutes />}>
            <Route path='/horas' element={<HourPage />} />
          </Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
