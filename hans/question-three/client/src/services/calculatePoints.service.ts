export enum GAME_STATUS {
  WIN,
  LOSE,
}

export const calculateWinPoints = (
  gameBoard: String[][],
  equation: [],
  gameStatus: GAME_STATUS
) => {
  let correctGuess = 0;
  let totalCells = gameBoard.length * gameBoard[0].length;
  let incorrectGuess = 0;
  let correctIndexes: number[] = [];
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === "") {
        break;
      } else {
        if (gameBoard[i][j] === equation[j]) {
          if (correctIndexes.includes(j)) {
          } else {
            correctGuess += 1;
            correctIndexes.push(j);
          }
        } else {
          incorrectGuess += 1;
        }
      }
    }
  }
  if (gameStatus === GAME_STATUS.WIN) {
    let points = (correctGuess / (correctGuess + incorrectGuess)) * 50;
    return (50 + points) * (gameBoard[0].length / gameBoard.length);
  } else {
    return (
      ((correctGuess - incorrectGuess) / totalCells) *
      50 *
      (gameBoard[0].length / gameBoard.length)
    );
  }
};
