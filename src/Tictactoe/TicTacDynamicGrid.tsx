import { useState } from "react";

export default function TicTacToeDynamicGrid() {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null);

  // create new grid
  const createGrid = (n) => {
    setSize(n);
    setBoard(Array(n * n).fill(null));
    setWinner(null);
    setIsX(true);
  };

  // winner logic for dynamic grid
  const checkWinner = (newBoard, n) => {
    const lines = [];

    // rows
    for (let r = 0; r < n; r++) {
      lines.push([...Array(n)].map((_, i) => r * n + i));
    }

    // columns
    for (let c = 0; c < n; c++) {
      lines.push([...Array(n)].map((_, i) => i * n + c));
    }

    // diagonal left → right
    lines.push([...Array(n)].map((_, i) => i * n + i));

    // diagonal right → left
    lines.push([...Array(n)].map((_, i) => i * n + (n - i - 1)));

    for (let line of lines) {
      const first = newBoard[line[0]];
      if (!first) continue;

      if (line.every((idx) => newBoard[idx] === first)) {
        return first;
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isX ? "X" : "O";

    const win = checkWinner(newBoard, size);

    setBoard(newBoard);
    setIsX(!isX);
    setWinner(win);
  };

  return (
    <div>
      <h2>Dynamic Tic Tac Toe</h2>

      {/* Grid Size Input */}
      <input
        type="number"
        min={3}
        placeholder="Enter grid size"
        onChange={(e) => createGrid(Number(e.target.value))}
      />

      <p>{winner ? `Winner: ${winner}` : `Turn: ${isX ? "X" : "O"}`}</p>

      {/* Grid */}
      <div
        className={`grid h-max w-max gap-4`}
        style={{
          gridTemplateColumns: `repeat(${size}, 60px)`,
        }}
      >
        {board.map((cell, i) => (
          <div
            key={i}
            className="size-12 bg-slate-300"
            onClick={() => handleClick(i)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}
