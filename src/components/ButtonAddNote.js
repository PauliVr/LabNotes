import './ButtonAddNote.css';
import { useNavigate } from 'react-router-dom';

function ButtonAddNote() {
  const navigate = useNavigate();

  return (
    <button className='btn__addnote' onClick={() => navigate('/nuevaNota')}>
      <img src='./assets/addIcon.svg' alt='IconAdd' />
    </button>
  );
}

export default ButtonAddNote;
