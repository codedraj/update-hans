import { BoardCell, BoardRow, FullBoard } from "./styledComponents";
import { useContext } from "react";
import { BoardContext } from "../../App";
import KeyboardComp from "../KeyboardComp/KeyboardComp";
import { useEffect } from "react";
import { useBeforeunload } from "react-beforeunload";
import { useSelector } from "react-redux";
import {
  calculateWinPoints,
  GAME_STATUS,
} from "../../services/calculatePoints.service";
type Props = {};

const BoardComp = () => {
  const { boardState, equation, currentPosition }: any =
    useContext(BoardContext);
  const { user } = useSelector((state: any) => state.user);
  useEffect(() => {
    console.log(boardState);
    console.log(equation);
  }, []);

  useBeforeunload(() => {
    const handleCloseGame = async () => {
      const points = calculateWinPoints(
        boardState,
        equation.STRING_ARRAY[0].split(""),
        GAME_STATUS.LOSE
      );
      const response = await fetch(
        `http://localhost:5201/updateGame/${user.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            points,
            gameBoard: boardState,
            gameStatus: GAME_STATUS.LOSE.toString().toLowerCase(),
          }),
        }
      );
    };
    handleCloseGame();
  });

  return (
    <div>
      <FullBoard>
        {boardState &&
          boardState.map((row: any, rowIndex: number) => {
            return (
              <BoardRow key={rowIndex}>
                {row.map((cell: any, cellIndex: number) => {
                  const equationArray = equation.STRING_ARRAY[0].split("");
                  const correct = cell === equationArray[cellIndex];
                  const maybeCorrect = !correct && equationArray.includes(cell);
                  const tryIndex = rowIndex < currentPosition.y;
                  const colorStateFunc = () => {
                    if (tryIndex) {
                      if (correct) {
                        return " #4C9141";
                      } else if (maybeCorrect) {
                        return "yellow";
                      } else if (!correct && !maybeCorrect) {
                        return "red";
                      }
                    } else {
                      return "";
                    }
                  };
                  const colorState = colorStateFunc();

                  return (
                    <BoardCell
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: colorState,
                      }}
                      key={cellIndex}
                    >
                      {cell}
                    </BoardCell>
                  );
                })}
              </BoardRow>
            );
          })}
      </FullBoard>
      <KeyboardComp />
    </div>
  );
};

export default BoardComp;
