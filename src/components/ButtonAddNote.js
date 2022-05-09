import './ButtonAddNote.css';
import { useNavigate } from 'react-router-dom';

function ButtonAddNote() {
  const navigate = useNavigate();

  return (
    <button className='btn__addnote' onClick={() => navigate('/NuevaNota')}>
      <img src='./assets/addIcon.svg' alt='' />
    </button>
  );
}

export default ButtonAddNote;