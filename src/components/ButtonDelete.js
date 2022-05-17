import './ButtonDelete.css';

export default function ButtonDelete(props) {
  return (
    <button
      className='button__delete'
      onClick={() => {
        props.delete(true, props.id);
      }}
    >
      Eliminar
      <img src='./assets/delete.svg' alt='IconDelete' />
    </button>
  );
}
