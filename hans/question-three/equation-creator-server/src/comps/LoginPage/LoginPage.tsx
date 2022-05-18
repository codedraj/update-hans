import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { loginService } from "../../service/login.service";

type Props = {};

const LoginPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { userData } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const response = loginService(state.email, state.password);
    dispatch(setUserData(userData));
    console.log(userData);
  };
  return (
    <div>
      <h2 style={{ color: "white" }}>Login</h2>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        </FloatingLabel>
      </Form>
    </div>
  );
};

export default LoginPage;
