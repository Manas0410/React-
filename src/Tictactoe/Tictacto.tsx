//1 matrix
//2 curent turn
//2 onClick change X,O
//3 win condition

import { useTic } from "./useTic";

const Tictactoe = () => {
  const { board, onClick, message, isWinner, onReset } = useTic();
  return (
    <div>
      {isWinner ? <h1>player {isWinner} WON</h1> : <h1>{message}</h1>}
      <button onClick={onReset}>reset</button>
      <div className="grid grid-cols-3 gap-4 w-max">
        {board.map((item, i) => (
          <button
            key={i}
            disabled={isWinner || item !== null}
            className="size-16 bg-slate-100"
            onClick={() => onClick(i)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tictactoe;
