import { signUpUrl } from "../routing/backendRoutes";

const signUpEndpoint = async (email, password, name, lastName, roleId) => {
  const encryptedPassword = crypto.subtle.digest("SHA-256", password);
  const data = {
    email,
    password: encryptedPassword,
    name,
    lastName,
    roleId
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