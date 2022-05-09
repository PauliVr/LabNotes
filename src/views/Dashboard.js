import '../globalStyles.css';
import './Dashboard.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getNote } from '../firebase/firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ButtonLogOut from '../components/ButtonLogOut';
import Note from '../components/Note';
import ButtonAddNote from '../components/ButtonAddNote';
import ButtonBack from '../components/ButtonBack';
import Loader from '../components/Loader';
import Modal from '../components/Modal';

export default function Dashboard() {
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //se ejecuta al cambiar esta o renderiza por primera vez
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      } else {
        getNote(user.uid)
          .then((snapshot) => {
            if (snapshot.length > 0) {
              console.log(snapshot);
              setNotas(snapshot);
            }

            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    });
  }, []);

  return (
    <section className='container_dashboard'>
      <div className='bar'>
        <div className='btn__add'>
          <ButtonAddNote />
        </div>
        <div className='btn__log'>
          <ButtonLogOut />
        </div>
      </div>
      <div className='notes__container'>
        <div className='dashboard__title'>
          <img src='./assets/estrellita.svg' alt='' />
          <h1 className='dashboard__title--text'>Mi Espacio</h1>
          <img src='./assets/estrellita.svg' alt='' />
        </div>
        <div className='container__notes'>
          {notas.length > 0 ? (
            notas?.map((doc) => (
              <Note
                id={doc.id}
                title={doc.infoNote.title}
                content={doc.infoNote.content}
                date={doc.infoNote.registerDay}
              />
            ))
          ) : (
            <Loader size />
          )}
        </div>
      </div>
      <Modal />
    </section>
  );
}
