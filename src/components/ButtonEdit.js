import { useNavigate } from 'react-router-dom';
import './ButtonEdit.css';
export default function ButtonEdit(props) {
  let navigate = useNavigate();
  return (
    <button className='btn__edit' onClick={() => navigate('/editarNota/' + props.id)}>
      <img src='./assets/edit.svg' alt='IconPencil' />
    </button>
  );
}
