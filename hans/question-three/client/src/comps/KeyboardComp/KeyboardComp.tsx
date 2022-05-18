import { useContext } from "react";
import { useSelector } from "react-redux";
import { BoardContext } from "../../App";
import { handleWin } from "../../services/handleGameWin.service";
import { handleYouLose } from "../../services/handleYouLose.service";
import { numpadKeys, symbolKeys } from "./keyboardConstants";
import {
  ContainerDiv,
  KeyboardButton,
  KeyboardLineContainerDiv,
} from "./styledKeyboardComp";

type Props = {};

const KeyboardComp = (props: Props) => {
  const { user } = useSelector((state: any) => state.user);
  const {
    boardState,
    setBoardState,
    currentPosition,
    setCurrentPosition,
    equation,
  }: any = useContext(BoardContext);

  const handleClick = (val: string) => {
    if (symbolKeys.includes(val)) {
      if (
        symbolKeys.includes(
          boardState[currentPosition.y][currentPosition.x - 1]
        )
      ) {
        return;
      }
    }
    if (currentPosition.x === boardState[0].length) {
      return;
    }
    let newBoardState = [...boardState];
    newBoardState[currentPosition.y][currentPosition.x] = val;
    setBoardState(newBoardState);
    setCurrentPosition((prev: any) => {
      return {
        x: prev.x + 1,
        y: prev.y,
      };
    });
  };

  return (
    <ContainerDiv>
      <KeyboardLineContainerDiv>
        {numpadKeys.map((key: any, keyIndex: number) => {
          return (
            <KeyboardButton
              onClick={(e) => {
                handleClick(key.toString());
              }}
              style={{ width: "50px" }}
              key={keyIndex}
            >
              {key}
            </KeyboardButton>
          );
        })}
      </KeyboardLineContainerDiv>
      <KeyboardLineContainerDiv>
        <KeyboardButton
          onClick={() => {
            if (currentPosition.x === 0) {
              return;
            }
            let newBoardState = [...boardState];
            newBoardState[currentPosition.y][currentPosition.x - 1] = "";
            setBoardState(newBoardState);
            setCurrentPosition((prev: any) => {
              return {
                x: prev.x - 1,
                y: prev.y,
              };
            });
          }}
          style={{ width: "100px" }}
        >
          Del
        </KeyboardButton>
        {symbolKeys.map((key: any, keyIndex: number) => {
          return (
            <KeyboardButton
              onClick={(e) => {
                handleClick(key.toString());
              }}
              style={{ width: "50px" }}
              key={keyIndex}
            >
              {key}
            </KeyboardButton>
          );
        })}
        <KeyboardButton
          onClick={async (e) => {
            if (currentPosition.x === boardState[0].length) {
              if (boardState[currentPosition.y].includes("=")) {
                const equationString = boardState[currentPosition.y].join("");
                const equationArray = equationString.split("=");
                if (eval(equationArray[0]) === eval(equationArray[1])) {
                  if (equationString === equation.STRING_ARRAY[0]) {
                    window.alert("Correct! You Won the Game! 🎉");
                    setCurrentPosition((prev: any) => {
                      return {
                        x: 0,
                        y: prev.y + 1,
                      };
                    });
                    const responseData = await handleWin(
                      boardState,
                      user.id,
                      equation.STRING_ARRAY[0].split("")
                    );
                    console.log(responseData);
                  } else if (currentPosition.y === boardState.length - 1) {
                    window.alert("Try Again!!!! 😭");
                    setCurrentPosition((prev: any) => {
                      return {
                        x: 0,
                        y: prev.y + 1,
                      };
                    });
                    const responseData = await handleYouLose(
                      boardState,
                      equation.STRING_ARRAY[0].split(""),
                      user.id
                    );
                    console.log(responseData);
                  } else {
                    setCurrentPosition((prev: any) => {
                      return {
                        x: 0,
                        y: prev.y + 1,
                      };
                    });
                  }
                } else {
                  window.alert("Incorrect Equation");
                }
              }
            }
          }}
          style={{ width: "100px" }}
        >
          Enter
        </KeyboardButton>
      </KeyboardLineContainerDiv>
    </ContainerDiv>
  );
};

export default KeyboardComp;
