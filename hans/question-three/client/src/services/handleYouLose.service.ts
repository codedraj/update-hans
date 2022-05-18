import { calculateWinPoints, GAME_STATUS } from "./calculatePoints.service";

export const handleYouLose = async (
  gameBoard: string[][],
  equation: [],
  id: string
) => {
  const points = calculateWinPoints(gameBoard, equation, GAME_STATUS.LOSE);
  const response = await fetch(`http://localhost:5201/updateGame/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      points,
      gameBoard,
      gameStatus: GAME_STATUS.LOSE.toString().toLowerCase(),
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
