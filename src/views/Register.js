import React from 'react';
import '../globalStyles.css';
import './Register.css';

function Register() {

  



  return (
    <section className='container_register'>
      <div className='heroRegister'>
        <img src='./assets/abduction.svg' alt='' className='heroRegister__img' />
      </div>
      <div className='register'>
        <h2 className='register__title'>REGISTRO</h2>
        <div className='register_form'>
          <div className='form__input mg'>
            <input
              type='text'
              className='form__text--register'
              id='inputEmail'
              placeholder='jhon_doe'
              required
            />
            <label htmlFor='inputEmail' className='form__label'>
              Nombre de usuario
            </label>
          </div>

          <div className='form__input mg'>
            <input
              type='text'
              className='form__text--register'
              id='inputName'
              placeholder='Jhon Doe'
              required
            />
            <label htmlFor='inputEmail' className='form__label'>
              Nombre Completo
            </label>
          </div>

          <div className='form__input mg'>
            <input
              type='email'
              className='form__text--register'
              id='inputEmail'
              placeholder='example@example.com'
              required
            />
            <label htmlFor='inputEmail' className='form__label'>
              Correo electronico
            </label>
          </div>

          <div className='form__input mg'>
            <input
              type='text'
              className='form__text--register'
              id='password'
              placeholder='T123@maps'
              required
            />
            <label htmlFor='inputEmail' className='form__label'>
              Contraseña
            </label>
          </div>

          <div className='form__input mg'>
            <input
              type='text'
              className='form__text--register'
              id='password'
              placeholder='T123@maps'
              required
            />
            <label htmlFor='inputEmail' className='form__label'>
              Repetir Contraseña
            </label>
          </div>

          <div className='button__container'>
            <button className='form__button'>Registrarme</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
