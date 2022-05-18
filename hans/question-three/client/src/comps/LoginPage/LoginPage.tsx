import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../../App";
import { setUser } from "../../app/userSlice";
import loginService from "../../services/login.service";
import { LoginContainer } from "./styledLoginComponenet";

type Props = {};

const LoginPage = (props: Props) => {
  const { authMessage, setAuthMessage }: any = useContext(BoardContext);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await loginService(creds);
    console.log(response);
    dispatch(
      setUser({
        id: response.user._id,
        username: response.user.username,
        points: response.user.points,
        type: "LOGIN",
      })
    );
    navigate("/selectGame");
  };
  return (
    <LoginContainer>
      {authMessage && <h1>{authMessage}</h1>}
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-form-title" htmlFor="email">
          Email
        </label>
        <input
          className="login-form-input"
          type="text"
          name="email"
          value={creds.email}
          onChange={handleChange}
        />

        <label className="login-form-title" htmlFor="password">
          Password
        </label>
        <input
          className="login-form-input"
          type="password"
          name="password"
          value={creds.password}
          onChange={handleChange}
        />

        <button className="login-form-button" type="submit">
          <h1>Login</h1>
        </button>
      </form>
      <br></br>
      <h1>
        Dont have an Account!!?{" "}
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          SignUp
        </button>
      </h1>
    </LoginContainer>
  );
};

export default LoginPage;
