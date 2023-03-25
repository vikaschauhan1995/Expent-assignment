import { workflowNodes } from "../constants";


export function getNodeObjectById(id, arr = workflowNodes) {
  const item = arr.filter(node => node.id === id);
  if (item.length > 0) {
    return item[0];
  }
  return { id: 898080, title: 'New title', description: 'New Description' };
}