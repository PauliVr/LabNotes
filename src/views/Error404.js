import '../globalStyles.css';
import './Error404.css';

function Error404() {
  return (
    <div className='container__error'>
      <div className='error__hero'>
        <img src='./assets/abduction404.svg' alt='404Error' className='container__img' />
      </div>
    </div>
  );
}

export default Error404;
