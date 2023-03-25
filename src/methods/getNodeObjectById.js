import { workflowNodes } from "../constants";


export function getNodeObjectById(id) {
  const item = workflowNodes.filter(node => node.id === id);
  if (item.length > 0) {
    return item[0];
  }
  return {};
}