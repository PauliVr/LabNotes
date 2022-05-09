import { useNavigate } from 'react-router-dom';
import './ButtonDelete.css';

export default function ButtonDelete() {
  function deleteNote() {}

  return (
    <button className='button__delete' onClick={deleteNote}>
      <img src='./assets/delete.svg' alt='' />
    </button>
  );
}
