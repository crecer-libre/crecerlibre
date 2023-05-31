import {Route, Routes} from 'react-router-dom';
import { AppRouter } from '../components/App/Routes/AppRouter';
import { AuthRouter } from '../components/Auth/Routes/AuthRouter';
import { AdminRouter } from '../components/Admin/Routes/AdminRouter';


export const CrecerLibreRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<AppRouter />}/>
        <Route path='/auth/*' element={<AuthRouter />}/>
        <Route path='/admin/*' element={<AdminRouter />}/>
    </Routes>
  )
}
