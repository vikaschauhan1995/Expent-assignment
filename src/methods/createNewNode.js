

const getLastId = (arr) => {
  const lastId = arr[arr.length - 1].id;
  return parseInt(lastId);
}

export const createNewNode = (currentNode, initialNode) => {
  const lastId = getLastId(initialNode);
  // debugger;
  const newObj = { ...currentNode, id: "" + (lastId + 1), position: { x: currentNode?.position.x, y: currentNode?.position.y + 100 } };
  // newObj.data.label.props.id = lastId + 1;
  console.log("newObj", newObj);
  return newObj;
}