const validationErrorForm = (values) => {
  let error = {};

  // if (!values.name) {
  //   error.name = 'El Nombre es requerido';
  // }
  // if (!values.email) {
  //   error.email = 'El Correo es requerido';
  // }
  // if (!values.password) {
  //   error.password = 'El Password es requerido';
  // }

  if (values.name.trim() === '') {
    error.name = 'El Nombre es requerido';
  } else if (values.email.trim() === '') {
    error.email = 'El Correo es requerido';
  } else if (values.password.trim() === '') {
    error.password = 'El Password es requerido';
  }

  return error;
};

export default validationErrorForm;
