import { logInUrl } from "../../routing/backendRoutes";

/**
 * Checks if the user could log in.
 * @param {string} email User's email
 * @param {string} password User's password
 * @returns A confirmation.
 */
const logInEndpoint = async (email, password) => {
  const encryptedPassword = crypto.subtle.digest("SHA-256", password);
  const data = {
    email,
    password,
  };
  const response = await fetch(logInUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default logInEndpoint;