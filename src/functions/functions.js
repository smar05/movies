const { check } = require("express-validator");

const notEmpty = (nombresParametros) => {
  let validateRegister = [];

  nombresParametros.forEach((nombreParametro) => {
    validateRegister.push(
      check(nombreParametro)
        .notEmpty()
        .withMessage(`Debes completar el campo: ${nombreParametro}`)
    );
  });

  return validateRegister;
};

module.exports = { notEmpty };
