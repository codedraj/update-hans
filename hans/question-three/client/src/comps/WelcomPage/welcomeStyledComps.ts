import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: black;
    margin: 1rem 1rem;
  }
  button {
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: grey;
      color: #fff;
    }
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin-top: 1rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: black;
    margin: 1rem 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    select {
      width: 100%;
      height: 2rem;
      border: none;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: #000;
      margin-top: 1rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: grey;
        color: #fff;
      }
    }
    input {
      width: 100%;
      height: 2rem;
      border: none;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: #000;
      margin-top: 1rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: grey;
        color: #fff;
      }
    }
    button {
      background-color: #fff;

      border: none;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: #000;
      margin-top: 1rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: grey;
        color: #fff;
      }
    }
  }
`;
