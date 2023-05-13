import React from 'react'
import { LoginPage } from '../Pages/Login/LoginPage'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../../App/ui/NavBar'

export const AuthRouter = () => {
  return (
    <div className='app'>
      <NavBar />
      <div className='container mx-auto mt-6 p-5'>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
