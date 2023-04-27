import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../Pages/About/AboutPage';
import { HomePage } from '../Pages/Home/HomePage';
import { ScheduleHour } from '../Pages/Schedule/components/ScheduleHour';
import { SchedulePage } from '../Pages/Schedule/SchedulePage';
import { Footer } from '../ui/Footer';
import { NavBar } from '../ui/NavBar';

export const AppRouter = () => {
    return (
        <div className='app'>
            <NavBar />
            <div className='container mx-auto mt-6 p-5'>
                <Routes>
                    <Route path='' element={<HomePage />} />
                    <Route path='/nosotros' element={<AboutPage />} />
                    {/* SCHEDULE */}
                    <Route path='/agendar' element={<SchedulePage />} />
                    <Route path='/agendar/:id' element={<ScheduleHour />} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
