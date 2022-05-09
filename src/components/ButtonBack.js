import { useNavigate } from 'react-router-dom';
import './ButtonBack.css';
export default function ButtonBack() {
  const navigate = useNavigate();
  return (
    <button
      className='button__back'
      onClick={() => {
        navigate('/');
      }}
    >
      <img className='button__back--img' src='assets/ArrowWithe.svg' alt='' />
    </button>
  );
}
