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

// Arr[] = ( 9:00, 9:45, 9:55, 11:00, 15:00, 18:00 }
// Dep[] = { 9:20, 12:00, 11:30, 11:50, 19:00, 20:00 }

const ar = [900, 945, 955, 1100, 1500, 1800];
const dep = [920, 1200, 1130, 1150, 1900, 2000];

let pc = 1;

let i = 1;
let PlatFormDeps = [dep[0]];
while (i < ar.length) {
  if (ar[i] >= Math.min(...PlatFormDeps)) {
    // pop the smallest
  } else {
    pc++;
  }
  PlatFormDeps.push(dep[i]);
  i++;
}
