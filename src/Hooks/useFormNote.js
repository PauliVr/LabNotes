import { useState } from 'react';
import { omit } from 'lodash';

const useFormNote = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    switch (name) {
      case 'title':
        if (value.length === 0) {
          setErrors({
            ...errors,
            title: 'tú titulo no debe estar vacio',
          });
        } else {
          let newObj = omit(errors, 'title');
          setErrors(newObj);
        }
        break;
      case 'content':
        if (value.length === 0) {
          setErrors({
            ...errors,
            content: 'el contenido de tu nota no debe estar vacio',
          });
        } else {
          let newObj = omit(errors, 'content');
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();
    let name = event.target.name;
    let value = event.target.value;

    validate(event, name, value);

    setValues({
      ...values,
      [name]: value,
    });
  };

  const valueChange = (data) => {
    setValues({
      title: data.title,
      content: data.content,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      callback(true);
    }
  };

  return {
    values,
    errors,
    valueChange,
    handleChange,
    handleSubmit,
  };
};

export default useFormNote;
