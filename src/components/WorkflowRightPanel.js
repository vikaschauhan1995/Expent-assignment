import React from 'react';
import '../style/components/WorkflowRightPanel.css';
import Button from '@mui/material/Button';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const WorkflowRightPanel = () => {
  return (
    <div className="WorkflowRightPanel__container">
      <div>
        <Button className="WorkflowRightPanel__button my-1"><AutorenewOutlinedIcon /></Button>
      </div>
      <div>
        <Button className="WorkflowRightPanel__button my-1"><GpsFixedOutlinedIcon /></Button></div>
      <div>
        <Button className="WorkflowRightPanel__button my-1"><FullscreenExitOutlinedIcon /></Button>
      </div>
      <div>
        <div>
          <Button className="WorkflowRightPanel__button btn-add"><AddOutlinedIcon /></Button></div>
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.5)'
        }}>
          <Button className="WorkflowRightPanel__button btn-subs">< RemoveOutlinedIcon /></Button>
        </div>
      </div >
    </div >
  )
}

export default WorkflowRightPanel
