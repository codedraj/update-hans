import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;

  .form-input {
    margin-bottom: 20px;
  }
  .form-button {
    margin-top: 20px;
  }
`;
