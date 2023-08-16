import logInEndpoint from '../endpoints/sessionEndpoints/logInEndpoint';
import signUpEndpoint from '../endpoints/sessionEndpoints/signUpEndpoint';

/**
 * logInUser: Starts the log in process to log in the user into the page with its credentials.
 * @param {string} email String related to the user email.
 * @param {string} password String related to the user password.
 * @returns A boolean value indicating whether the user logs in succesfully.
 */
export const logInUser = async (email, password) => {
  const response = await logInEndpoint(email, password);
  const isSuccessful = response.success;
  const message = isSuccessful ? "Iniciando sesión..." : "Contraseña o correo incorrecto.";
  const loginInformation = {
    done:isSuccessful, message
  }
  return loginInformation;
}

/**
 * signUpUser: Starts the sign up process to create a new user in the page.
 * @param {string} email String related to the user email.
 * @param {string} password String related to the user password.
 * @returns A boolean value indicating whether the user logs in succesfully.
 */
export const signUpUser = async (email, password, name, lastName) => {
  const response = await signUpEndpoint(email, password, name, lastName);
  const isSuccessful = response.id > 0;
  const message = isSuccessful ? "Registro completado, iniciando al sistema..." : "No se ha podido registrar el usuario, intentelo de nuevo.";
  const loginInformation = {
    done:isSuccessful, message
  }
  return loginInformation;
}