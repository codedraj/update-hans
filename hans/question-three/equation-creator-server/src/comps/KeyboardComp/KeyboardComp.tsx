import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { GameContext } from "../../App";
import { numpad, symbols } from "../../constants/keyBoard";
import {
  handleEnterService,
  updateBoard,
  updateDelete,
} from "../../service/updateBoard.service";
import "./keyboard.css";

function KeyboardComp() {
  const { equationObject }: any = useSelector((state: any) => state.user);
  const { position, setPosition, board, setBoard }: any =
    useContext(GameContext);
  const handleClick = (val: string) => {
    updateBoard(position.x, position.y, val, board, setBoard, setPosition);
  };
  const handleDelete = () => {
    updateDelete(position.x, position.y, board, setBoard, setPosition);
  };
  const handleEnter = () => {
    if (position.x == board[0].length) {
      if (equationObject === board[position.y]) {
        window.alert(`"You wooonnnnn"`);
      }
    }
    handleEnterService(position.x, position.y, board, setPosition);
  };
  return (
    <div>
      {numpad.map((x: number, i: number) => {
        return (
          <Button
            onClick={() => {
              handleClick(x.toString());
            }}
            key={i + 1}
            variant="info"
          >
            {x.toString()}
          </Button>
        );
      })}
      <br></br>
      {symbols.map((x: String, i: number) => {
        return (
          <Button
            onClick={() => {
              handleClick(x.toString());
            }}
            key={i + 1}
            variant="info"
          >
            {x.toString()}
          </Button>
        );
      })}
      <Button onClick={handleDelete} variant="info">
        Del
      </Button>
      <Button onClick={handleEnter} variant="info">
        Enter
      </Button>
    </div>
  );
}

export default KeyboardComp;
