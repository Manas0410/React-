import { useState } from "react";
import { folderData } from "./data";
import { insertNode } from "./utils";
import RenderStructure from "./RenderStructure";

const FolderStructure = () => {
  const [tree, setTree] = useState(folderData);

  const handleAdd = (parentId, isFolder) => {
    const name = prompt(`Enter ${isFolder ? "folder" : "file"} name`);
    if (!name) return;

    const newNode = {
      id: crypto.randomUUID,
      name,
      isFolder,
      children: [],
    };

    setTree((prev) => insertNode(prev, parentId, newNode));
  };

  return (
    <>
      <div className="ml-7">
        <button onClick={() => handleAdd(null, true)}>+ 📁</button>
        <button onClick={() => handleAdd(null, false)}>+ 📄</button>
      </div>
      <RenderStructure data={tree} onAdd={handleAdd} />
    </>
  );
};

export default FolderStructure;
