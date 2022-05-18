export const boardDefault: String[][] = [];
export const setBoardDefault = (
  board: String[][] = boardDefault,
  y: number,
  x: number
) => {
  for (let i = 0; i < y; i++) {
    board[i] = [];
    for (let j = 0; j < x; j++) {
      board[i][j] = "";
    }
  }
  return board;
};

export default boardDefault;
