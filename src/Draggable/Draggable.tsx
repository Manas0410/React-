import { useRef, useState } from "react";
import DraggableDiv from "./DragAnywhere";

const Draggable = () => {
  const [Widgets, setWidgets] = useState<string[]>([]);

  const handleOnDrag = (e: React.DragEvent, widget: string) => {
    e.dataTransfer?.setData("widGet", widget);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const widget = e.dataTransfer?.getData("widGet");
    if (widget) {
      setWidgets([...Widgets, widget]);
    }
  };

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const listDragDiv = useRef<number>(-1);
  const listDragOverDiv = useRef<number>(-1);

  const handleListDragSort = () => {
    setWidgets((prev) => {
      const newWidgets = [...prev];
      [newWidgets[listDragDiv.current], newWidgets[listDragOverDiv.current]] = [
        newWidgets[listDragOverDiv.current],
        newWidgets[listDragDiv.current],
      ];
      return newWidgets;
    });
  };

  return (
    <section className="flex h-screen w-full justify-around items-center ">
      {/* dragable elements  */}
      <aside>
        <div
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widg A")}
          className="Widgets"
        >
          Widg A
        </div>
        <div
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widg B")}
          className="Widgets"
        >
          Widg B
        </div>
        <div
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widg C")}
          className="Widgets"
        >
          Widg C
        </div>
      </aside>
      {/* drop area  */}
      <main
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
        className="bg-black flex justify-center gap-2 items-center flex-col
         h-[500px] w-[350px] overflow-scroll"
      >
        {Widgets.map((widget, i) => (
          <div
            key={i}
            className="Widgets"
            draggable
            onDragStart={() => (listDragDiv.current = i)}
            onDragEnter={() => (listDragOverDiv.current = i)}
            onDragEnd={handleListDragSort}
            onDragOver={handleOnDragOver}
          >
            {widget}
          </div>
        ))}
      </main>
      <DraggableDiv />
    </section>
  );
};

export default Draggable;
