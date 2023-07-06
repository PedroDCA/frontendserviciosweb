import { logInUrl } from "../routing/backendRoutes";
export default async (email, password) => {
  const encryptedPassword = crypto.subtle.digest("SHA-256", password);
  const data = {
    email,
    password: encryptedPassword,
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