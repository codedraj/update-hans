import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
  }

  .login-form-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  .login-form-input {
    margin-bottom: 20px;
  }
  .login-form-button {
    margin-top: 20px;
  }
`;
