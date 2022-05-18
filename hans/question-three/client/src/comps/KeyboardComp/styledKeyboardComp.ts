import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  box-shadow: 0px 0px 3px #000000;
  padding: 10px;
`;
export const KeyboardLineContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  margin: 10px;
`;
export const KeyboardButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5rem,
    height: 5rem;
    background-color: #739C7C;
    border-radius: 10px;
    margin: 10px;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }
`;
