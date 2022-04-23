import '../globalStyles.css';
import './NewNote.css';
import ButtonLogOut from '../components/ButtonLogOut';
import ButtonBack from '../components/ButtonBack';

export default function NewNote() {
  const arrayNotes = [
    './assets/notasGrandes/greenNote.svg',
    './assets/notasGrandes/blueNote.svg',
    './assets/notasGrandes/deepPinkNote.svg',
    './assets/notasGrandes/lilacNote.svg',
    './assets/notasGrandes/orangeNote.svg',
    './assets/notasGrandes/peachNote.svg',
    './assets/notasGrandes/pinkNote.svg',
    './assets/notasGrandes/purpleNote.svg',
    './assets/notasGrandes/redNote.svg',
    './assets/notasGrandes/yellowNote.svg',
  ];

  const arrayBtnColor = [
    'note__btn--borderGreen',
    'note__btn--borderBlue',
    'note__btn--borderdeepPink',
    'note__btn--borderLilac',
    'note__btn--borderOrange',
    'note__btn--borderPeach',
    'note__btn--borderPink',
    'note__btn--borderPurple',
    'note__btn--borderRed',
    'note__btn--borderYellow',
  ];

  const randomNoteColor = arrayNotes[Math.floor(Math.random() * arrayNotes.length)];
  const indexNoteColor = Math.floor(Math.random() * arrayNotes.length);

  


  return (
    <section className='container_dashboardNotes'>
      <div className='dashboard__containerNotes'>
        <div className='heroDashboard'>
          <ButtonBack />
          <ButtonLogOut></ButtonLogOut>
        </div>
        <div className='dashboardNotes'>
          <div className='dashboard__titleNotes'>
            <img src='./assets/estrellita.svg' alt='' />
            <h1 className='dashboard__title--textNotes'>Nueva Nota</h1>
            <img src='./assets/estrellita.svg' alt='' />
          </div>
          <div className='container__notes'>
            <div className='notes__img'>
              <img className='newNote' src={randomNoteColor} alt='' />
            </div>
            <form className='form__note'>
              <label htmlFor='title' className='note__label'>
                Título
              </label>
              <input type='text' className='note__input--title' />
              <label htmlFor='description' className='note__label'>
                Contenido
              </label>
              <textarea className='note__textarea--content'></textarea>
              <button type='submit' className='note__btn'>
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
