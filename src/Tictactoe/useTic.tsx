import { useCallback, useEffect, useMemo, useState } from "react";

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const InitialBoard = new Array(3 * 3).fill(null);
export const useTic = () => {
  const [board, setBoard] = useState(InitialBoard);
  const [isXTurn, toggleIsXTurn] = useState(true);
  const [isWinner, setIsWinner] = useState(null);

  const onReset = useCallback(() => {
    setBoard(InitialBoard);
    toggleIsXTurn(true);
    setIsWinner(null);
  }, []);

  const calculateWinner = () => {
    for (let p of winPatterns) {
      const [i, j, k] = p;
      if (board[i] === board[j] && board[i] === board[k]) {
        setIsWinner(board[i]);
        return;
      }
    }
  };

  useEffect(() => {
    calculateWinner();
  }, [isXTurn]);

  const onClick = (i: number) => {
    setBoard((p) => {
      const temp = [...p];
      temp[i] = isXTurn ? "X" : "O";
      toggleIsXTurn((p) => !p);
      return temp;
    });
  };
  const message = useMemo(() => {
    return `player ${isXTurn ? "X" : "O"} turn`;
  }, [isXTurn]);

  return { board, onClick, message, isWinner, onReset };
};
