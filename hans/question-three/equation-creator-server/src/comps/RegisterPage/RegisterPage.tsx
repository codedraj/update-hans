import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";

type Props = {};

const RegisterPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state.confirmPassword === state.password) {
      console.log(state);
    }
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>
        Register
        {/*/ could use styled components for reusability  */}
      </h2>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <Form.Group>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingConfirmPassword"
            label="Conform Password"
          >
            <Form.Control
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          <br></br>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
