import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { GameContext } from "../../App";
import { setEquationObject } from "../../redux/userSlice";
import KeyboardComp from "../KeyboardComp/KeyboardComp";
import "./index.css";

function BoardComp() {
  const { board, boardConfig, position, data }: any = useContext(GameContext);
  const { equationObject } = useSelector((state: any) => state.user);
  console.log(`equation object is ${equationObject.STRING_ARRAY}`);
  console.log(boardConfig.x.toString());
  return (
    <div>
      <div id="myContainer">
        {board.map((x: [], i: number) => {
          return (
            <div className="d-flex justify-content-center" key={i + 1}>
              {x.map((y: number, j: number) => {
                const correct: boolean =
                  equationObject.STRING_ARRAY[j] === y.toString();
                const almost: boolean =
                  !correct &&
                  y.toString() !== "" &&
                  equationObject.STRING_ARRAY.includes(y.toString());
                const letterStateFunc = () => {
                  if (i < position.y) {
                    if (correct) {
                      return "correct";
                    } else if (almost) {
                      return "almost";
                    } else {
                      return "nope";
                    }
                  } else {
                    return "tile";
                  }
                };
                let letterState = letterStateFunc();
                return (
                  <div id={letterState} key={j + 1}>
                    {y}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <KeyboardComp />
    </div>
  );
}

export default BoardComp;
