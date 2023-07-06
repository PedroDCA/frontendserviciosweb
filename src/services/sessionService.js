import logInEndpoint from '../endpoints/logInEndpoint';
import signUpEndpoint from '../endpoints/signUpEndpoint';

/**
 * logInUser: Starts the log in process to log in the user into the page with its credentials.
 * @param {string} email String related to the user email.
 * @param {string} password String related to the user password.
 * @returns A boolean value indicating whether the user logs in succesfully.
 */
export const logInUser = async (email, password) => {
  const response = await logInEndpoint(email, password);
  const wasUserLoggedIn = response.Successful;
  return wasUserLoggedIn;
}

/**
 * signUpUser: Starts the sign up process to create a new user in the page.
 * @param {string} email String related to the user email.
 * @param {string} password String related to the user password.
 * @returns A boolean value indicating whether the user logs in succesfully.
 */
export const signUpUser = async (email, password, name, lastName, roleId) => {
  const response = await signUpEndpoint(email, password, name, lastName, roleId);
  const data = {
    userId: response.Id,
    wasUserSignUp: response.Successful,
    error: response.Error,
  };
  return data;
}