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

// Project information form
export const SOURCING_OPTION = 'sourcing_option';
export const RANGE_OF_USER = 'range_of_user';
export const EXPECTED_SPEND = 'expected_spend';
export const WILL_SHARE_PII = 'will_share_pii';
export const TYPE_OF_VENDORS = 'type_of_vendors';
export const VENDOR_ACCESS_TO_AWS = 'vendor_access_to_aws';
export const IS_ATTACHED_DOCUMENT = 'is_attached_document';


export const SOURCING_OPTION_ERROR = 'sourcing_option_error';
export const RANGE_OF_USER_ERROR = 'range_of_user_error';
export const EXPECTED_SPEND_ERROR = 'expected_spend_error';
export const WILL_SHARE_PII_ERROR = 'will_share_pii_error';
export const TYPE_OF_VENDORS_ERROR = 'type_of_vendors_error';
export const VENDOR_ACCESS_TO_AWS_ERROR = 'vendor_access_to_aws_error';
export const IS_ATTACHED_DOCUMENT_ERROR = 'is_attached_document_error';


