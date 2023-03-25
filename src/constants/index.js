import {
  MarkerType
} from 'reactflow';
export const workflowNodes = [
  { id: 1, title: 'Requirement Selection', description: 'Persmission, form type and +1' },
  { id: 2, title: 'Questionnaire', description: 'Persmission, form type and +1' },
  { id: 5, title: 'Collaborator Feedback_1', description: 'Persmission, form type and +1' },
  { id: 6, title: 'Collaborator Feedback_2', description: 'Persmission, form type and +1' },
  { id: 7, title: 'Collaborator Feedback_3', description: 'Persmission, form type and +1' },
];

export const commonEdgeProps = {
  markerEnd: {
    type: MarkerType.Arrow,
  },
  style: {
    strokeWidth: 2,
    stroke: '#17BEBB'
  },
  type: "step"
}
export const edgePropsNoArrow = {
  style: {
    strokeWidth: 2,
    stroke: '#17BEBB'
  },
  type: "step"
}