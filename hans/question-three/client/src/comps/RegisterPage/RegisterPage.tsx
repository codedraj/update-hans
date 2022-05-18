import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../../App";
import registerService from "../../services/register.service";
import { Form, FormContainer } from "./styledRegisterPage";

type Props = {};

const RegisterPage = (props: Props) => {
  const { authMessage, setAuthMessage }: any = useContext(BoardContext);
  const [creds, setCreds] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:5201/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });
      const data = await response.json();
      console.log(data);
      if (data.reg) {
        alert("Successfully registered");
        setAuthMessage("Successfully registered!!! Please Login!!");
        navigate("/login");
      } else {
        setAuthMessage(data.message);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <FormContainer>
      {authMessage && <h1>{authMessage}</h1>}
      <Form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={creds.username}
          onChange={handleChange}
          className="form-input"
        />
        <label htmlFor="email">Email</label>
        <input
          value={creds.email}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          className="form-input"
        />
        <label htmlFor="password">Password</label>
        <input
          value={creds.password}
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          className="form-input"
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          value={creds.confirmPassword}
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          id="password"
          className="form-input"
        />
        <button className="form-button" type="submit">
          Register
        </button>
      </Form>
    </FormContainer>
  );
};

export default RegisterPage;
