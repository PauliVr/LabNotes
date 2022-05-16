import { useNavigate } from 'react-router-dom';
import './ButtonDelete.css';
import Modal from './Modal';

export default function ButtonDelete(props) {
  return (
    <button
      className='button__delete'
      onClick={() => {
        props.delete(true, props.id);
      }}
    >
      <img src='./assets/delete.svg' alt='IconDelete' />
    </button>
  );
}
