import { useState } from "react";

const RenderStructure = ({ data, onAdd }) => {
  const [expanded, setExpanded] = useState({});

  const expandClick = (id) => {
    setExpanded((p) => ({ ...p, [id]: !p[id] }));
  };

  return (
    <section className="max-w-80">
      {data.map((item) => (
        <div key={item.id} className="ml-8 my-2">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span onClick={() => item.isFolder && expandClick(item.id)}>
              {item.isFolder ? "📁" : "📄"} {item.name}
            </span>

            {item.isFolder && (
              <div className="ml-auto">
                <button onClick={() => onAdd(item.id, true)}>+ 📁</button>
                <button onClick={() => onAdd(item.id, false)}>+ 📄</button>
              </div>
            )}
          </div>

          {item.isFolder && expanded[item.id] && (
            <RenderStructure data={item.children} onAdd={onAdd} />
          )}
        </div>
      ))}
    </section>
  );
};

export default RenderStructure;
