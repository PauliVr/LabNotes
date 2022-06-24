import '../globalStyles.css';
import './AlertNote.css';

export default function AlertNote(props) {
  return (
    <div className={'container__Alert ' + props.color}>
      <img className='Alert__img' src={`/assets/${props.image}.svg`} alt='IconCheck' />
      <p className='Alert__text'>{props.message}</p>
    </div>
  );
}
