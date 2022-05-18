export const updateBoard = (
  x: number,
  y: number,
  val: String,
  oldBoard: any,
  callBackFuncBoard: any,
  callBackFuncPosition: any
) => {
  if (x < oldBoard[0].length) {
    let newBoard = [...oldBoard];
    newBoard[y][x] = val;
    callBackFuncBoard(newBoard);
    callBackFuncPosition((prev: { x: number; y: number }) => {
      return { x: prev.x + 1, y: prev.y };
    });
  }
};
export const updateDelete = (
  x: number,
  y: number,
  oldBoard: any,
  callBackFuncBoard: any,
  callBackFuncPosition: any
) => {
  if (x > 0) {
    let newBoard = [...oldBoard];
    newBoard[y][x - 1] = "";
    callBackFuncPosition((prev: any) => {
      return { y: prev.y, x: prev.x - 1 };
    });
    callBackFuncBoard(newBoard);
  }
};
export const handleEnterService = (
  x: number,
  y: number,
  oldBoard: any,
  callBackFuncPosition: any
) => {
  if (oldBoard[y].includes("=")) {
    if (x === oldBoard[0].length) {
      const equationString = oldBoard[y].join("");
      console.log(equationString);
      const newArray = equationString.split("=");
      const bool: Boolean = eval(newArray[0]) == newArray[1];
      console.log(bool);

      if (y < oldBoard.length) {
        if (bool) {
          callBackFuncPosition((p: { y: any; x: any }) => {
            return { y: p.y + 1, x: 0 };
          });
        } else {
          window.alert("wrong equation");
        }
      }
    }
  }
};
