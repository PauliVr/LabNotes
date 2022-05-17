import deleteNote from '../firebase/firebase';
import '../globalStyles.css';
import './Modal.css';

export default function Modal(props) {
  async function deletedNote(id) {
    if (id) {
      await deleteNote(id);
      props.delete(false, '');
    }
    console.log('se elimino la nota con id: ' + id);
    // setTimeout(() => {
    //   props.delete(false, '');
    // }, 3000);
  }

  return (
    <section className='modal'>
      <div className='modal__container'>
        <button
          type='button'
          className='btn__close'
          onClick={() => {
            props.delete(false, '');
          }}
        >
          close
          <img className='modal__img' src='./assets/close.svg' alt='IconClose' />
        </button>
        <img className='modal__img' src='./assets/GatoAlert.svg' alt='AstroCat' />
        <h3 className='modal__title'>¿Estas segur@ que quieres eliminar la nota?</h3>
        <p className='modal__text'>* Al eliminar la nota no podrás recuperarla * </p>
        <div className='modal__btns'>
          <button
            className='modal__btnCancel'
            onClick={() => {
              props.delete(false, '');
            }}
          >
            Cancelar
          </button>
          <button
            className='delete'
            onClick={() => {
              deletedNote(props.id);
            }}
          >
            Eliminar Nota
          </button>
        </div>
      </div>
    </section>
  );
}
