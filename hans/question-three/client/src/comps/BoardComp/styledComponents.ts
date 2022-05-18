import styled from "styled-components";

export const FullBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  box-shadow: 0px 0px 10px #000000;
  padding: 10px;
`;
export const BoardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  margin: 10px;
`;
export const BoardCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 10px;
  margin: 0.5px 2.5px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
`;
