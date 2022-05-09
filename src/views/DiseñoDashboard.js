import ButtonDelete from '../components/ButtonDelete';
import ButtonEdit from '../components/ButtonEdit';
import '../globalStyles.css';
import './DiseñoDashboard.css';

export default function DiseñoDashboard() {
  return (
    <section className='containerDashboard'>
      <div className='bar'>
        <img src='./assets/addIcon.svg' alt='' />
        <img src='./assets/addIcon.svg' alt='' />
        <ButtonDelete />
        <ButtonEdit />
      </div>
      <div className='notes'></div>
    </section>
  );
}
