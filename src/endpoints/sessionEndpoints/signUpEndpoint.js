import { signUpUrl } from "../../routing/backendRoutes";

/**
 * Creates a new user.
 * @param {string} email User's email
 * @param {string} password User's password
 * @param {string} name User's name
 * @param {string} lastName User's last name
 * @returns A confirmation.
 */
const signUpEndpoint = async (email, password, name, lastName) => {
  const encryptedPassword = crypto.subtle.digest("SHA-256", password);
  const data = {
    email,
    password,
    name,
    lastName
  };
  const response = await fetch(signUpUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default signUpEndpoint;