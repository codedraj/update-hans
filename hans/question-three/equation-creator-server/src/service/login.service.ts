export const loginService = async (
  emailInput: String,
  passwordInput: String
) => {
  const response = await fetch("http://localhost:4000/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: emailInput,
      password: passwordInput,
    }),
  });
  const data = await response.json();
  return data;
};
