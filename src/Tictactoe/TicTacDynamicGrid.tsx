// import { useState } from "react";

import { useEffect, useMemo, useState } from "react";

// export default function TicTacToeDynamicGrid() {
//   const [size, setSize] = useState(3);
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isX, setIsX] = useState(true);
//   const [winner, setWinner] = useState(null);

//   // create new grid
//   const createGrid = (n) => {
//     setSize(n);
//     setBoard(Array(n * n).fill(null));
//     setWinner(null);
//     setIsX(true);
//   };

//   // winner logic for dynamic grid
//   const checkWinner = (newBoard, n) => {
//     const lines = [];

//     // rows
//     for (let r = 0; r < n; r++) {
//       lines.push([...Array(n)].map((_, i) => r * n + i));
//     }

//     // columns
//     for (let c = 0; c < n; c++) {
//       lines.push([...Array(n)].map((_, i) => i * n + c));
//     }

//     // diagonal left → right
//     lines.push([...Array(n)].map((_, i) => i * n + i));

//     // diagonal right → left
//     lines.push([...Array(n)].map((_, i) => i * n + (n - i - 1)));

//     for (let line of lines) {
//       const first = newBoard[line[0]];
//       if (!first) continue;

//       if (line.every((idx) => newBoard[idx] === first)) {
//         return first;
//       }
//     }

//     return null;
//   };

//   const handleClick = (index) => {
//     if (board[index] || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = isX ? "X" : "O";

//     const win = checkWinner(newBoard, size);

//     setBoard(newBoard);
//     setIsX(!isX);
//     setWinner(win);
//   };

//   return (
//     <div>
//       <h2>Dynamic Tic Tac Toe</h2>

//       {/* Grid Size Input */}
//       <input
//         type="number"
//         min={3}
//         placeholder="Enter grid size"
//         onChange={(e) => createGrid(Number(e.target.value))}
//       />

//       <p>{winner ? `Winner: ${winner}` : `Turn: ${isX ? "X" : "O"}`}</p>

//       {/* Grid */}
//       <div
//         className={`grid h-max w-max gap-4`}
//         style={{
//           gridTemplateColumns: `repeat(${size}, 60px)`,
//         }}
//       >
//         {board.map((cell, i) => (
//           <div
//             key={i}
//             className="size-12 bg-slate-300"
//             onClick={() => handleClick(i)}
//           >
//             {cell}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//board
//isX
//isWinner

const TicTacToeDynamicGrid = () => {
  const [Board, setBoard] = useState<[string[]]>([[]]);
  const [isX, setIsX] = useState<boolean>(true);
  const [isWinner, setIsWinner] = useState<null | "X" | "O">(null);
  const [gridSize, setGridSize] = useState<number>(5);

  //create Board
  useEffect(() => {
    const grid = Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => null),
    );

    setBoard(grid);
  }, [gridSize]);

  //checkWinner
  useEffect(() => {
    const checkwinner = () => {
      //check rows
      for (let i = 0; i < gridSize; i++) {
        let first = Board[i][0];
        const isWin = Board[i].every((item) => item === first);
        if (isWin) return first;
      }

      // check Columns
      for (let i = 0; i < gridSize; i++) {
        const first = Board[0][i];
        let isWin = true;
        for (let j = 0; j < gridSize; j++) {
          if (Board[j][i] !== first) isWin = false;
        }
        if (isWin) return first;
      }

      // check  diagonal
      const diagFirst = Board[0][0];
      let diagWin = true;
      for (let j = 0; j < gridSize; j++) {
        if (Board[j][j] !== diagFirst) diagWin = false;
      }
      if (diagWin) return diagFirst;

      // check anti diag
      const antiDiagFirst = Board[0][gridSize - 1];
      let antiDiagWin = true;
      for (let j = 0; j < gridSize; j++) {
        if (Board[j][gridSize - 1 - j] !== antiDiagFirst) antiDiagWin = false;
      }
      if (antiDiagWin) return antiDiagFirst;

      return null;
    };

    let winner = checkwinner();
    if (winner) setIsWinner(winner);
  }, [isX]);

  // onclick handler
  const onClick = (i: number, j: number) => {
    if (isWinner) return;
    setBoard((p) => {
      const temp = structuredClone(p);
      temp[i][j] = isX ? "X" : "O";
      return temp;
    });

    setIsX((p) => !p);
  };

  return (
    <div>
      <input
        className="border-2"
        value={gridSize}
        type="number"
        onChange={(e) => setGridSize(Number(e.target.value))}
        placeholder="enter grid size"
        min={3}
      />

      <p>{isWinner ? `Winner: ${isWinner}` : `Turn: ${isX ? "X" : "O"}`}</p>

      {/* board */}

      <div
        className={`grid  gap-4 w-max`}
        style={{ gridTemplateColumns: `repeat(${gridSize} , 1fr)` }}
      >
        {Board.map((row, i) => (
          <>
            {row.map((item, j) => (
              <span
                onClick={() => onClick(i, j)}
                key={`${i}-${j}`}
                className="size-10 bg-slate-300 grid items-center text-center"
              >
                {item}
              </span>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default TicTacToeDynamicGrid;
