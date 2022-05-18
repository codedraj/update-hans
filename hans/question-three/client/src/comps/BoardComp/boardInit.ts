export const boardInit = (numberOfTries: number, lenOfEquation: number) => {
  const board: string[][] = [];
  for (let i = 0; i < numberOfTries; i++) {
    board[i] = [];
    for (let j = 0; j < lenOfEquation; j++) {
      board[i][j] = "";
    }
  }
  return board;
};
