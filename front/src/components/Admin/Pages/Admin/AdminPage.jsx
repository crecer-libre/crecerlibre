import { CreateProfessional } from './components/CreateProfessional';
import { CreateStudent } from './components/CreateStudent';
import './styles.css';
export const AdminPage = () => {
  return (
    <div className="container mx-auto">
      <div className="operations">
        <CreateProfessional />
      </div>
      <div className="operations">
        <CreateStudent />
      </div>
    </div>
  )
}
