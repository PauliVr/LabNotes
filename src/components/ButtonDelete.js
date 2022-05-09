import { useNavigate } from 'react-router-dom';
import './ButtonDelete.css';

export default function ButtonDelete() {
  return (
    <button className='button__delete'>
      <img src='./assets/delete.svg' alt='' />
    </button>
  );
}
