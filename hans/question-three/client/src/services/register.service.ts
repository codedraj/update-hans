interface RegisterProps {
  username: string;
  email: string;
  password: string;
}

const registerService = async ({
  email,
  password,
  username,
}: RegisterProps) => {
  const response = await fetch("http://localhost:5201/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  return data;
};

export default registerService;
