// import React, { useState, useRef } from "react";

// const DraggableDiv: React.FC = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const dragOffset = useRef({ x: 0, y: 0 });

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     setIsDragging(true);
//     // Calculate the offset between the mouse position and the current position of the div
//     dragOffset.current = {
//       x: e.clientX - position.x,
//       y: e.clientY - position.y,
//     };
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (isDragging) {
//       // Update the position of the div based on the mouse movement
//       setPosition({
//         x: e.clientX - dragOffset.current.x,
//         y: e.clientY - dragOffset.current.y,
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   React.useEffect(() => {
//     if (isDragging) {
//       window.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("mouseup", handleMouseUp);
//     } else {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     }

//     // Cleanup event listeners on component unmount or when dragging stops
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isDragging]);

//   return (
//     <div
//       onMouseDown={handleMouseDown}
//       style={{
//         position: "absolute",
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//         width: "100px",
//         height: "100px",
//         backgroundColor: "lightblue",
//         cursor: "grab",
//       }}
//     >
//       Drag me!
//     </div>
//   );
// };

// export default DraggableDiv;

import React, { useState, useRef } from "react";

const DraggableDiv: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const parentRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    // Calculate the offset between the mouse position and the current position of the div
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && parentRef.current) {
      const parentRect = parentRef.current.getBoundingClientRect();
      const newX = e.clientX - dragOffset.current.x;
      const newY = e.clientY - dragOffset.current.y;

      // Constrain the draggable div within the parent bounds
      const clampedX = Math.max(0, Math.min(newX, parentRect.width - 100)); // Subtract the width of the div
      const clampedY = Math.max(0, Math.min(newY, parentRect.height - 100)); // Subtract the height of the div

      setPosition({ x: clampedX, y: clampedY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    // Cleanup event listeners on component unmount or when dragging stops
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={parentRef}
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        border: "2px solid black",
        overflow: "hidden",
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
          cursor: "grab",
        }}
      >
        Drag me!
      </div>
    </div>
  );
};

export default DraggableDiv;

// import React, { useState, useRef } from "react";

// const DraggableDiv: React.FC = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const parentRef = useRef<HTMLDivElement | null>(null);

//   const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
//     const { offsetX, offsetY } = e.nativeEvent;
//     e.dataTransfer.setData("text/plain", `${offsetX},${offsetY}`);
//   };

//   const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     const offset = e.dataTransfer.getData("text/plain").split(",");
//     const offsetX = parseInt(offset[0], 10);
//     const offsetY = parseInt(offset[1], 10);

//     if (parentRef.current) {
//       const parentRect = parentRef.current.getBoundingClientRect();
//       const newX = e.clientX - parentRect.left - offsetX;
//       const newY = e.clientY - parentRect.top - offsetY;

//       // Constrain the draggable div within the parent bounds
//       const clampedX = Math.max(0, Math.min(newX, parentRect.width - 100)); // Subtract the width of the div
//       const clampedY = Math.max(0, Math.min(newY, parentRect.height - 100)); // Subtract the height of the div

//       setPosition({ x: clampedX, y: clampedY });
//     }
//   };

//   return (
//     <div
//       ref={parentRef}
//       style={{
//         position: "relative",
//         width: "400px",
//         height: "400px",
//         border: "2px solid black",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         draggable
//         onDragStart={handleDragStart}
//         onDrag={handleDrag}
//         onDrop={handleDrop}
//         onDragOver={(e) => e.preventDefault()} // Allow drop
//         style={{
//           position: "absolute",
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           width: "100px",
//           height: "100px",
//           backgroundColor: "lightblue",
//           cursor: "grab",
//         }}
//       >
//         Drag me!
//       </div>
//     </div>
//   );
// };

// export default DraggableDiv;
