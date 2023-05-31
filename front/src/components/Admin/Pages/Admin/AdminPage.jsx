import { useContext } from 'react';
import { CreateHourAdmin } from './components/CreateHourAdmin';
import { CreateProfessional } from './components/CreateProfessional';
import { CreateStudent } from './components/CreateStudent';
import './styles.css';
import { CrecerLibreContext } from '../../../../context/crecerlibreContext';
import { ProfessionalComponent } from './components/ProfessionalComponent';
export const AdminPage = () => {

  const { user } = useContext(CrecerLibreContext);

  return (
    <>
      {/* admin */}
      {
        (user.role === 'ADMIN_ROLE') &&
        <div className="container mx-auto admin-page">
          <div>
            <div className="operations">
              <CreateProfessional />
            </div>
            <div className="operations">
              <CreateStudent />
            </div>
          </div>
          <div className='operations'>
            <CreateHourAdmin />
          </div>
        </div>
      }
      {/* professional */}
      {
        (user.role === 'PROFESSIONAL_ROLE') && 
          <ProfessionalComponent />
      }
    </>
  )
}
