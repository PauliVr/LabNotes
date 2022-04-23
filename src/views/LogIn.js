import { useEffect } from 'react';
import '../globalStyles.css';
import './LogIn.css';
import { useNavigate, Link } from 'react-router-dom';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, userExist, registerUser } from '../firebase/firebase';
import useForm from '../Hooks/useForm';
function LogIn() {
  const navigate = useNavigate();
  const { handleChange, valueS, errors, handleSubmit } = useForm(formLogin);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log(user);
      if (user) {
        const isRegistered = await userExist(user.uid);
        if (!isRegistered) {
          await registerUser(user.uid, user.displayName, user.email);
          navigate('/');
        } else if (isRegistered && user.uid) {
          navigate('/');
        }
        console.log(user.displayName);
      }
    });
  }, [navigate]);

  async function handleClick() {
    const googleProvider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

  async function formLogin() {
    try {
      console.log(valueS.email);
      const result = await signInWithEmailAndPassword(auth, valueS.email, valueS.password);
      console.log(result);
      const registered = await userExist(auth.currentUser.uid);
      if (registered && auth.currentUser.uid) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  }

  //  const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  //  const expPassword =
  //    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  return (
    <section className='container_login'>
      <div className='login'>
        <div className='login__content'>
          <div className='login__title--container'>
            <img src='./assets/estrellita.svg' alt='' />
            <h2 className='login__title'>INICIAR SESIÓN</h2>
            <img src='./assets/estrellita.svg' alt='' />
          </div>
          <form onSubmit={handleSubmit} className='form'>
            <div className='form__group'>
              <img src='https://svgshare.com/i/g6x.svg' alt='' className='form__icon' />
              <div className='form__input'>
                <input
                  name='email'
                  type='text'
                  className='form__text'
                  id='inputEmail'
                  placeholder='example@example.com'
                  onChange={handleChange}
                  required
                />
                {<p className='form__alert'>{errors.email}</p>}
                <label htmlFor='inputEmail' className='form__label'>
                  Correo
                </label>
              </div>
            </div>
            <div className='form__group'>
              <img src='https://svgshare.com/i/g6y.svg' alt='' className='form__icon' />
              <div className='form__input'>
                <input
                  name='password'
                  type='password'
                  className='form__text'
                  placeholder='Password123?'
                  onChange={handleChange}
                  required
                />
                {<p className='form__alert'>{errors.password}</p>}
                <label htmlFor='form__input' className='form__label'>
                  Contraseña
                </label>
              </div>
            </div>
            <div className='form__buttons'>
              <button type='submit' className='form__button'>
                Entrar
              </button>
              <Link to='/registro' className='form__link'>
                Crear una cuenta
              </Link>
              <button className='form__button--google' onClick={handleClick}>
                con Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='hero'>
        <h1 className='hero__title'>SpaceNotes</h1>
        <div className='hero__slogan'>
          <img src='./assets/MoonIcon.svg' alt='' className='hero__icon' />
          <h3 className='hero__text'>“El espacio para organizar tú vida” </h3>
          <img src='./assets/PlanetIcon.svg' alt='' className='hero__icon' />
        </div>
        <img src='./assets/nebulousstars.svg' alt='' className='hero__img' />
        <img src='./assets/planets1.svg' alt='' className='hero__img' />
        <img src='./assets/ship.svg' alt='' className='hero__img' />
        <img src='./assets/themoon.svg' alt='' className='hero__img' />
        <img src='./assets/saturn.svg' alt='' className='hero__img' />
      </div>
    </section>
  );
}

export default LogIn;
