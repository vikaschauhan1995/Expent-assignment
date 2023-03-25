import React from 'react';
import '../style/components/WorkflowLeftPanel.css';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import PivotTableChartOutlinedIcon from '@mui/icons-material/PivotTableChartOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const WorkflowLeftPanel = () => {
  return (
    <div className="WorkflowLeftPanel__container">
      <div className="WorkflowLeftPanel__dragable">
        <div><DragIndicatorOutlinedIcon /></div>
        <div style={{ marginLeft: '-5px' }}><DragIndicatorOutlinedIcon /></div>
      </div>
      <div className="WorkflowLeftPanel__items_container">
        <div className="WorkflowLeftPanel__item_innner">
          <div><PivotTableChartOutlinedIcon /></div>
          <div className="WorkflowLeftPanel__item_description">Forms</div>
        </div>
        <div className="WorkflowLeftPanel__item_innner">
          <div><DescriptionOutlinedIcon /></div>
          <div className="WorkflowLeftPanel__item_description">Questionnaire</div>
        </div>
        <div className="WorkflowLeftPanel__item_innner">
          <div><AccountTreeOutlinedIcon /></div>
          <div className="WorkflowLeftPanel__item_description">Workflow</div>
        </div>
        <div className="WorkflowLeftPanel__item_innner">
          <div><DescriptionOutlinedIcon /></div>
          <div className="WorkflowLeftPanel__item_description">Summary</div>
        </div>
        <div className="WorkflowLeftPanel__item_innner">
          <div><CheckCircleOutlineOutlinedIcon /></div>
          <div className="WorkflowLeftPanel__item_description">Approval</div>
        </div>
        <div className="WorkflowLeftPanel__item_innner">
          <div><MoreHorizOutlinedIcon /></div>
          <div className="WorkflowLeftPanel__item_description">More</div>
        </div>
      </div>
    </div>
  )
}

export default WorkflowLeftPanel
