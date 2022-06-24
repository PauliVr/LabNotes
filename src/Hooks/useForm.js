import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { omit } from 'lodash';

const useForm = (callback) => {
  // Form values Register
  const [values, setValues] = useState({});

  // Form values login
  const [valueS, setValueS] = useState({});

  // Errors
  const [errors, setErrors] = useState({});

  // Validación de los inputs del formulario
  const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  // const expPassword =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  const expUserName = /[A-Za-z][A-Za-z0-9]{7,20}/;
  const expPassword = /[A-Za-z][A-Za-z0-9]{7,20}/;
  const expName = /[A-Za-z]+\s[A-Za-z]{5,22}/;

  const validate = (name, value) => {
    switch (name) {
      case 'userName':
        if (!expUserName.test(value)) {
          setErrors({
            ...errors,
            userName: 'Tú nombre de usuario debe tener letras, números y solo se permite _ ',
          });
        } else if (value < 0 && value > 20) {
          setErrors({
            ...errors,
            userName: 'Tu nombre de usuario debe tener entre 8 a 19 caracteres',
          });
        } else {
          const newObj = omit(errors, 'userName');
          setErrors(newObj);
        }
        break;

      case 'name':
        if (!expName.test(value)) {
          setErrors({
            ...errors,
            name: 'Ingresa nombre y apellido',
          });
        } else {
          const newObj = omit(errors, 'name');
          setErrors(newObj);
        }
        break;

      case 'email':
        if (!expEmail.test(value)) {
          setErrors({
            ...errors,
            email: 'ingresa un correo electrónico valido',
          });
        } else {
          const newObj = omit(errors, 'email');
          setErrors(newObj);
        }
        break;

      case 'password':
        if (!expPassword.test(value)) {
          setErrors({
            ...errors,
            password:
              'ingresa una contraseña con el formato valido, empezar con letras, una mayúscula, una minúscula y números',
          });
        } else {
          const newObj = omit(errors, 'password');
          setErrors(newObj);
        }
        break;

      case 'repeatPass':
        if (!expPassword.test(value)) {
          setErrors({
            ...errors,
            repeatPass:
              'La contraseña debe tener 9 caracteres -> una mayúscula, un número, una minúscula y un caráter especial',
          });
        } else if (value !== values.password) {
          setErrors({
            ...errors,
            repeatPass: 'La contraseña que ingresaste no coincide con la anterior',
          });
        } else {
          const newObj = omit(errors, 'repeatPass');
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  // evento para detectar el cambio del valor del input
  const handleChange = (event) => {
    event.persist();

    const { name } = event.target;
    const val = event.target.value;

    validate(name, val);

    setValues({
      ...values,
      [name]: val,
    });

    setValueS({
      ...valueS,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log(valueS);
    if (Object.keys(errors).length === 0 && Object.keys(valueS).length === 2) {
      callback();
    } else if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      console.log('there is an error');
    }
  };

  return {
    values,
    valueS,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
