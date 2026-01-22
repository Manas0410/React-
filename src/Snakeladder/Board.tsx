import { useState } from "react";

type Moves = Record<number, number>;

export default function SnakeLadder() {
  const [position, setPosition] = useState<number>(1);
  const [dice, setDice] = useState<number>(1);
  const [rolling, setRolling] = useState<boolean>(false);

  const BOARD_SIZE = 100;

  // 🟩 ladders
  const ladders: Moves = {
    1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 51: 67, 71: 91, 80: 100
  };

  // 🟥 snakes
  const snakes: Moves = {
    16: 6, 48: 30, 62: 19, 64: 60, 93: 68, 95: 24, 98: 78
  };

  const moves: Moves = { ...ladders, ...snakes };

  // 🎲 Dice roll animation
  const rollDice = async () => {
    if (rolling) return;
    setRolling(true);

    let temp = 1;
    for (let i = 0; i < 8; i++) {
      temp = Math.floor(Math.random() * 6) + 1;
      setDice(temp);
      await sleep(100);
    }

    movePlayer(temp);
  };

  // 🚶 Player movement animation (step by step)
  const movePlayer = async (steps: number) => {
    let curr = position;

    for (let i = 0; i < steps; i++) {
      if (curr + 1 > BOARD_SIZE) break;
      curr++;
      setPosition(curr);
      await sleep(200);
    }

    // snake or ladder jump
    if (moves[curr]) {
      setPosition(moves[curr]);
    }

    setRolling(false);
  };

  const sleep = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

  // zig-zag board
  const getBoardNumbers = (): number[][] => {
    const rows: number[][] = [];

    for (let row = 0; row < 10; row++) {
      const start = row * 10 + 1;
      let nums = Array.from({ length: 10 }, (_, i) => start + i);
      if (row % 2 === 1) nums.reverse();
      rows.push(nums);
    }

    return rows.reverse();
  };

  const getBlockColor = (num: number): string => {
    if (num === position) return "orange";
    if (ladders[num]) return "#7CFC90";
    if (snakes[num]) return "#FF6B6B";
    return "white";
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🐍 Snake & Ladder (Animated + TS)</h2>

      <button
        onClick={rollDice}
        disabled={rolling}
        style={{ padding: "8px 16px", marginBottom: 10 }}
      >
        {rolling ? "Rolling..." : "Roll Dice 🎲"}
      </button>

      <p>Dice: {dice}</p>
      <p>Position: {position}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 40px)",
          gap: 2
        }}
      >
        {getBoardNumbers()
          .flat()
          .map(num => (
            <div
              key={num}
              style={{
                height: 40,
                width: 40,
                border: "1px solid #999",
                background: getBlockColor(num),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                transition: "background 0.2s"
              }}
            >
              {num}
            </div>
          ))}
      </div>
    </div>
  );
}
