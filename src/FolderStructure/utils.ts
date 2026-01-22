export function insertNode(tree, parentId, newNode) {
  if (!parentId) {
    return [...tree, newNode];
  }
  return tree.map((node) => {
    if (node.id === parentId && node.isFolder) {
      return {
        ...node,
        children: [...node.children, newNode],
      };
    }

    if (node.children.length > 0) {
      return {
        ...node,
        children: insertNode(node.children, parentId, newNode),
      };
    }

    return node;
  });
}

export function deleteNode(tree, nodeId) {
  return tree
    .filter((node) => node.id !== nodeId)
    .map((node) => ({
      ...node,
      children: node.children ? deleteNode(node.children, nodeId) : [],
    }));
}
