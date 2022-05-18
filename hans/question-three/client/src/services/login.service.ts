interface LoginProps {
  email: string;
  password: string;
}

const loginService = async ({ email, password }: LoginProps) => {
  const response = await fetch("http://localhost:5201/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data;
};

export default loginService;
