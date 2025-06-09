import { useEffect, useState } from "react";

type card = {
  id: number;
  number: number;
};

const MemoryGame = () => {
  const [Cards, setCards] = useState<card[]>([]);
  const [gridCount, setgridCount] = useState<number>(4);
  const [Flipped, setFlipped] = useState<number[]>([]);
  const [Win, setWin] = useState<boolean>(false);
  const [Solved, setSolved] = useState<number[]>([]);
  const [Disabled, setDisabled] = useState<boolean>(false);

  const initGame = () => {
    const totalCards = gridCount * gridCount;
    const pairCount = Math.floor(totalCards / 2);
    const generatedCards = [...new Array(pairCount)].map((_, i) => i + 1);

    const shuffledCards = [...generatedCards, ...generatedCards]
      .sort(() => Math.random() - 0.5)
      .map((num, i) => ({ id: i, number: num }));

    setCards(shuffledCards);
    setFlipped([]);
    setWin(false);
  };

  useEffect(() => {
    initGame();
  }, [gridCount]);

  const IsFlipped = (id: number) => Flipped.includes(id) || Solved.includes(id);
  const IsSolved = (id: number) => Solved.includes(id);

  const checkSolved = (secondId: number) => {
    const firstId = Flipped[0];
    if (Cards[firstId].number === Cards[secondId].number) {
      setSolved((prev) => [...prev, firstId, secondId]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  const cardClick = (id: number) => {
    if (Disabled || Win) return;
    if (Flipped.length === 0) setFlipped((p) => [...p, id]);
    else {
      setDisabled(true);
      if (id === Flipped[0]) {
        setFlipped([]);
        setDisabled(false);
      } else {
        setFlipped((p) => [...p, id]);
        checkSolved(id);
      }
    }
  };

  return (
    <section>
      <h1>memory game</h1>
      <div
        className={`grid w-max h-max gap-4`}
        style={{ gridTemplateColumns: `repeat(${gridCount}, minmax(0,1fr))` }}
      >
        {Cards.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-center rounded-md  h-20 w-20
                ${
                  IsFlipped(item.id)
                    ? IsSolved(item.id)
                      ? "bg-green-300"
                      : "bg-blue-300"
                    : "bg-slate-300"
                }
                `}
            onClick={() => cardClick(item.id)}
          >
            {IsFlipped(item.id) && item.number}{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGame;
