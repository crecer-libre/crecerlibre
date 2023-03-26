import {Route, Routes} from 'react-router-dom';
import { AppRouter } from '../components/App/Routes/AppRouter';


export const CrecerLibreRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<AppRouter />}/>
    </Routes>
  )
}
