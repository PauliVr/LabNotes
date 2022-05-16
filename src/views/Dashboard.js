import '../globalStyles.css';
import './Dashboard.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getNote } from '../firebase/firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ButtonLogOut from '../components/ButtonLogOut';
import Note from '../components/Note';
import ButtonAddNote from '../components/ButtonAddNote';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import FirstNote from '../components/FirstNote';

export default function Dashboard() {
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(0);
  const navigate = useNavigate();
  const [onDelete, setOnDelete] = useState(false);
  const [deleteId, setDeleteId] = useState('');

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
              setLoading(1);
              setNotas(snapshot);
            } else {
              setLoading(2);
              setNotas([]);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    });
  }, [onDelete]);

  function deleteStateChange(newState, id) {
    setOnDelete(newState);
    setDeleteId(id);
  }

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
          <img src='./assets/estrellita.svg' alt='IconStar' />
          <h1 className='dashboard__title--text'>Mi Espacio</h1>
          <img src='./assets/estrellita.svg' alt='IconStar' />
        </div>
        <div className='container__notes'>
          {loading ===1 ? (
            notas?.map((doc) => (
              <Note
                id={doc.id}
                title={doc.infoNote.title}
                content={doc.infoNote.content}
                date={doc.infoNote.registerDay}
                delete={deleteStateChange}
              />
            ))
          ) : loading === 2 ?(
            <FirstNote/>
          ) : (
            <Loader size />
          )}
        </div>
      </div>
      {onDelete ? <Modal delete={setOnDelete} id={deleteId} /> : ''}
    </section>
  );
}
