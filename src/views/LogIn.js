import React from 'react';
import '../globalStyles.css';
import './LogIn.css';

function LogIn() {
  return (
    <section className='container_login'>
      <div className='login'>
        <div className='login__content'>
          <h2 className='login__title'>INICIAR SESIÓN</h2>
          <form action='' className='form'>
            <div className='form__group'>
              <label htmlFor='inputEmail' className='form__label'>
                Correo
              </label>
              <img src='https://svgshare.com/i/g6x.svg' alt='' className='form__icon' />
              <input type='text' className='form__input' id='inputEmail' />
            </div>
            <div className='form__group'>
              <label htmlFor='form__input' className='form__label'>
                Contraseña
              </label>
              <img src='https://svgshare.com/i/g6y.svg' alt='' className='form__icon' />
              <input type='text' className='form__input' />
            </div>
            <div className='form__buttons'>
              <button className='form__button'>Entrar</button>
              <a href='#' className='form__link'>
                Crear una cuenta
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className='hero'>
        <h1 className='hero__title'>SpaceNotes</h1>
        <img src='../../public/assets/MoonIcon.svg' alt='' className='hero__img' />
        <h3 className='hero__slogan'>“El espacio para organizar tú vida” </h3>
        <img src='' alt='' className='hero__img' />
        <img src='../../public/assets/ship.svg' alt='' className='hero__img' />
        <img src='' alt='' className='hero__img' />
        <img src='' alt='' className='hero__img' />
        <img src='' alt='' className='hero__img' />
        <img src='' alt='' className='hero__img' />
      </div>
    </section>
  );
}

export default LogIn;
