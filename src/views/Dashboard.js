import '../globalStyles.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ButtonLogOut from '../components/ButtonLogOut';

export default function Dashboard() {
  const navigate = useNavigate();

  //se ejecuta al camiar esta o renderiza por primera vez
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });
  });

  return (
    <>
      <h1>Mis notas</h1>
      <ButtonLogOut></ButtonLogOut>
    </>
  );
}
