import './Note.css';
import '../globalStyles.css';
import ButtonDelete from './ButtonDelete';
import ButtonEdit from './ButtonEdit';

const color = [
  {
    noteColor: 'note__color--borderGreen',
    title: 'note__title--Green',
  },
  {
    noteColor: 'note__color--borderBlue',
    title: 'note__title--Blue',
  },
  {
    noteColor: 'note__color--borderdeepPink',
    title: 'note__title--deepPink',
  },
  {
    noteColor: 'note__color--borderLilac',
    title: 'note__title--Lilac',
  },
  {
    noteColor: 'note__color--borderOrange',
    title: 'note__title--Orange',
  },
  {
    noteColor: 'note__color--borderPeach',
    title: 'note__title--Peach',
  },
  {
    noteColor: 'note__color--borderPink',
    title: 'note__title--Pink',
  },
  {
    noteColor: 'note__color--borderPurple',
    title: 'note__title--Purple',
  },
  {
    noteColor: 'note__color--borderRed',
    title: 'note__title--Red',
  },
  {
    noteColor: 'note__color--borderYellow',
    title: 'note__title--Yellow',
  },
];

export default function Note(props) {
  const indexNoteColor = Math.floor(Math.random() * color.length);
  const randomNoteColor = color[indexNoteColor].noteColor;
  const randomTitleColor = color[indexNoteColor].title;
  return (
    <section className={'container__note ' + randomNoteColor}>
      <div className='note__info '>
        <h3 className={'note__title ' + randomTitleColor}>{props.title}</h3>
        <p className='note__content '>{props.content}</p>
      </div>
      <div className='note__footer'>
        <h5 className={randomTitleColor}>{props.date}</h5>
        <div className='note__buttons '>
          <ButtonDelete delete={props.delete} id={props.id} />
          <ButtonEdit id={props.id} />
        </div>
      </div>
    </section>
  );
}
