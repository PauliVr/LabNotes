import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export default function ButtonLogOut() {
  const navigate = useNavigate();
  function logOut() {
    signOut(auth)
      .then(() => navigate('/login'))
      .catch((error) => console.log(error));
  }

  return <button onClick={logOut}>Cerrar Sesión</button>;
}
