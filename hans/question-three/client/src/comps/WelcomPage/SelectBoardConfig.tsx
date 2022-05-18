import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../../App";
import { boardInit } from "../BoardComp/boardInit";
import { FormDiv } from "./welcomeStyledComps";

type Props = {
  gameType: string;
};

const SelectBoardConfig = () => {
  const {
    boardSize,
    setBoardSize,
    setBoardState,
    setCurrentPosition,
    setEquation,
  }: any = useContext(BoardContext);
  const { user } = useSelector((state: any) => state.user);
  console.log(user);
  const handleChange = (e: any) => {
    setBoardSize({ ...boardSize, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let newBoard = boardInit(boardSize.y, boardSize.x);
    console.log(newBoard);
    setBoardState(newBoard);
    const equationResponse = await fetch(
      "http://localhost:4000/" + boardSize.x.toString()
    );
    const equationData = await equationResponse.json();
    setCurrentPosition({
      x: 0,
      y: 0,
    });
    setEquation(equationData);
    navigate("/board");
  };

  const navigate = useNavigate();

  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <label>
          <h1>Select Length of Equation</h1>
          <input
            type="number"
            name="x"
            value={boardSize.x}
            onChange={handleChange}
            min="5"
            max="9"
            placeholder="Length Of Equation (Min 5 and Max 9)"
          />
        </label>
        <br></br>
        <label>
          <h1>Select Number of Tries</h1>
          <input
            type="number"
            value={boardSize.y}
            onChange={handleChange}
            name="y"
            min="5"
            max="9"
            placeholder="Number Of Tries (Min 5 and Max 9)"
          />
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </FormDiv>
  );
};
export default SelectBoardConfig;
