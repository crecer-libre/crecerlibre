import { useContext } from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import { CrecerLibreContext } from '../context/crecerlibreContext';
 
export const ProtectRoutes = () => {
    const {user} = useContext(CrecerLibreContext);
  
    return user.isAuthenticated ? <Outlet /> : <Navigate to='/auth/login' exact/>
}
