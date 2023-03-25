import React from 'react';
import '../style/components/WorkflowHeader.css';
import Button from '@mui/material/Button';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const WorkflowHeader = () => {
  return (
    <div className="WorkflowHeader__container mx-5">
      <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.15)' }}>
        <Button style={{ color: 'rgba(255, 255, 255, 0.6)' }} startIcon={<ArrowBackOutlinedIcon />}></Button>
      </div>
      <div className="mx-3" style={{ flex: 1 }}>
        <div className="WorkflowHeader__title">Procurement Workflow</div>
        <div className="WorkflowHeader__description">Step 2: Workflow Creation</div>
      </div>
      <div>
        <Button variant="outlined" className="WorkflowHeader__button p-2 color-white mx-2" color="info">
          Cancel
        </Button>
      </div>
      <div>
        <Button variant="outlined" className="WorkflowHeader__button p-2 color-white mx-2" color="info">
          Save Draft
        </Button>
      </div>
      <div>
        <Button variant="contained" className="WorkflowHeader__button p-2 filled mx-4" style={{ border: '1px solid #17BEBB !important' }} color="info">
          Finish
        </Button>
      </div>
    </div>
  )
}

export default WorkflowHeader
