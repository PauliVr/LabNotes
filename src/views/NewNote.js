import '../globalStyles.css';
import './NewNote.css';
import ButtonLogOut from '../components/ButtonLogOut';
import ButtonBack from '../components/ButtonBack';
import useFormNote from '../Hooks/useFormNote';
import { useNavigate, useParams } from 'react-router-dom';
import { saveNote, getUserNote, updateNote, auth } from '../firebase/firebase';
import AlertNote from '../components/AlertNote';
import { useEffect, useState } from 'react';

console.log(window.location);

const colors = [
  {
    note: 'note__btn--borderGreen',
    button: 'note__btn--borderGreen',
  },
  {
    note: 'note__borderBlue',
    button: 'note__btn--borderBlue',
  },
  {
    note: 'note__borderdeepPink',
    button: 'note__btn--borderdeepPink',
  },
  {
    note: 'note__borderLilac',
    button: 'note__btn--borderLilac',
  },
  {
    note: 'note__borderOrange',
    button: 'note__btn--borderOrange',
  },
  {
    note: 'note__borderPeach',
    button: 'note__btn--borderPeach',
  },
  {
    note: 'note__borderPink',
    button: 'note__btn--borderPink',
  },
  {
    note: 'note__borderPurple',
    button: 'note__btn--borderPurple',
  },
  {
    note: 'note__borderRed',
    button: 'note__btn--borderRed',
  },
  {
    note: 'note__borderYellow',
    button: 'note__btn--borderYellow',
  },
];

const indexNoteColor = Math.floor(Math.random() * colors.length);
const randomNoteColor = colors[indexNoteColor].note;
const randomBtnColor = colors[indexNoteColor].button;

export default function NewNote(props) {
  const { values, alertString, valueChange, handleChange, handleSubmit } =
    useFormNote(formRegisterNote);
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();
  const { id } = useParams('');

  let obj = {};
  useEffect(() => {
    async function editNote() {
      console.log(2);
      let editValues;
      if (id) {
        obj = await getUserNote(id);
        console.log(obj);
        valueChange(obj);
      }
      console.log(3);
    }
    editNote();
  }, []);

  async function formRegisterNote(isError) {
    let data;
    if (isError) {
      setAlert('uncheck');
    } else {
      if (id) {
        console.log(values);
        const registered = await updateNote(id, values.title, values.content);
        console.log(registered);
        setAlert(registered);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        data = values;
        try {
          const registeredNote = await saveNote(data.title, data.content, auth.currentUser.uid);
          console.log(registeredNote);
          setAlert(registeredNote);
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } catch (error) {
          setAlert('uncheck');
          console.log(error);
        }
      }
    }
  }

  return (
    <section className='container_dashboardNotes'>
      <div className='alert'>
        {alert === 'check' ? (
          <AlertNote color='Alert__check' image='check' message='Nota registrada' />
        ) : alert === 'uncheck' ? (
          <AlertNote color='Alert__uncheck' image='unCheck' message='Nota no registrada' />
        ) : (
          <AlertNote color='AlertNone' image='' message='' />
        )}
      </div>
      <div className='bar'>
        <div className='bar__back'>
          <ButtonBack />
        </div>
        <div className='bar__logout'>
          <ButtonLogOut />
        </div>
      </div>
      <div className='dashboardNotes'>
        <div className='dashboard__titleNotes'>
          <img src='/assets/estrellita.svg' alt='IconStar' />
          <h1 className='dashboard__title--textNotes'>{props.title}</h1>
          <img src='/assets/estrellita.svg' alt='IconStar' />
        </div>
        <div className='container__newnote'>
          <form className={'form__note ' + randomNoteColor} onSubmit={handleSubmit}>
            <div className='form__title'>
              <label htmlFor='title' className='note__label'>
                Título
              </label>
              <input
                value={values.title}
                name='title'
                type='text'
                className='note__input--title'
                onChange={handleChange}
              />
            </div>
            <div className='form__content'>
              <label htmlFor='description' className='note__label'>
                Contenido
              </label>
              <textarea
                value={values.content}
                name='content'
                className='note__textarea--content'
                onChange={handleChange}
              ></textarea>
            </div>
            <button type='submit' className={'note__btn ' + randomBtnColor}>
              Guardar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
