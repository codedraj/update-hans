import { calculateWinPoints, GAME_STATUS } from "./calculatePoints.service";

export const handleWin = async (
  gameBoard: String[][],
  id: String,
  equation: []
) => {
  const points = calculateWinPoints(gameBoard, equation, GAME_STATUS.WIN);
  const response = await fetch(`http://localhost:5201/updateGame/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      points,
      gameBoard,
      gameStatus: GAME_STATUS.WIN.toString().toLowerCase(),
    }),
  });
  const data = await response.json();
  return data;
};
