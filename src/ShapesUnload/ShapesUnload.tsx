import { useEffect, useMemo, useRef, useState } from "react";

const board = [
  [1, 1, 0],
  [1, 0, 0],
  [1, 1, 1],
];

const ShapesUnload = ({ Board = board }) => {
  const boxes = useMemo(() => {
    return Board.reduce((ac, val) => [...ac, ...val], []);
  }, [Board]);
  const NoOfVisibleBoxes = useMemo(
    () => boxes.reduce((ac, val) => (ac += val), 0),
    [boxes],
  );
  const [clicked, setClicked] = useState(new Set());
  const [offLoadingInprogress, setOffLoadingInProgress] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  //offload logic

  const offLoad = () => {
    const order = Array.from(clicked.keys());

    const unLoadKey = () => {
      if (order.length) {
        const current = order.shift();

        setClicked((prev) => {
          const temp = new Set(prev);
          temp.delete(current);
          return temp;
        });

        timerRef.current = setTimeout(unLoadKey, 500);
      } else {
        setOffLoadingInProgress(false);
        clearTimeout(timerRef.current);
      }
    };
    setOffLoadingInProgress(true);
    timerRef.current = setTimeout(unLoadKey, 100);
  };

  useEffect(() => {
    if (clicked.size >= NoOfVisibleBoxes) {
      offLoad();
    }
  }, [clicked]);

  const handleClick = (e) => {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const value = target.getAttribute("data-value");

    if (value === "0" || offLoadingInprogress) return;
    setClicked((prev) => {
      const newSet = new Set(prev);
      newSet.add(Number(index));
      return newSet;
    });
  };

  console.log(Array.from(clicked.keys()), clicked);

  return (
    <div className="grid grid-cols-3 gap-2 w-max" onClick={handleClick}>
      {boxes.map((item, i) => (
        <div
          key={i}
          className={`size-8 border-slate-400 border ${clicked.has(i) ? "bg-green" : ""} ${item === 0 ? "opacity-0" : ""}`}
          data-index={i}
          data-value={item}
        />
      ))}
    </div>
  );
};

export default ShapesUnload;
