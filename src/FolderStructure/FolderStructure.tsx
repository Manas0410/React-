import { useState } from "react";
import { folderData } from "./data";
import { deleteNode, insertNode } from "./utils";
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

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this file/folder?",
    );

    if (!confirmed) return;

    setTree((prev) => deleteNode(prev, id));
  };

  return (
    <>
      <div className="ml-7">
        <button onClick={() => handleAdd(null, true)}>+ 📁 </button>
        <button onClick={() => handleAdd(null, false)}>+ 📄 </button>
      </div>
      <RenderStructure data={tree} onAdd={handleAdd} onDel={handleDelete} />
    </>
  );
};

export default FolderStructure;
