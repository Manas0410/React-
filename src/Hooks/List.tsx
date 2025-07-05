import { useEffect, useState } from "react";

const List = ({
  getItems,
}: {
  getItems: (incrementor: number) => number[];
}) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("List component rendered");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default List;
