import React from 'react';
import '../style/components/ProjectInformationForm.css';
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ProgressBar from './ProgressBar';
import ProjectInformationFormWithBody from './ProjectInformationFormWithBody';
// import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';

const ProjectInformationForm = () => {
  const nameList = [{ name: 'DG', colorCode: '#FCAF58' }, { name: 'SJ', colorCode: '#907DCE' }, { name: 'AG', colorCode: '#90A955' }];
  const shortNameBadge = nameList.length > 0 ? nameList.map(item => {
    return (
      <div className="ProjectInformationForm__short_name_badge" style={{ backgroundColor: item.colorCode }}>
        <div>
          {item.name}
        </div>
      </div>
    );
  }) : 'Nop';
  return (
    <div className="ProjectInformationForm__container" style={{ marginBottom: '90px' }}>
      {/* <div >
        <KeyboardDoubleArrowLeftOutlinedIcon />
      </div> */}
      <div className="ProjectInformationForm__page_location p-3">Projects &gt; ... &gt; Project Information</div>
      <div className="ProjectInformationForm__head mx-3">
        <div className="ProjectInformationForm__head_left">
          <div><h2 className="ProjectInformationForm__heading">Request for Software</h2></div>
          <div className="ProjectInformationForm_date_detail">
            <div className="ProjectInformationForm__dates">12 Oct - 26 Oct, 2023</div>
            <div className="dot"></div>
            <div className="ProjectInformationForm_short_names" style={{ marginTop: '-3px' }}>
              {shortNameBadge}
            </div>
          </div>
        </div>
        <div className="ProjectInformationForm__head_right">
          <Button variant="outlined" className="ProjectInformationForm__button" color="info" endIcon={<ArrowForward />}>
            Project Overview
          </Button>
        </div>
      </div>
      <div className="ProjectInformationForm__mid">
        <div className="ProjectInformationForm__mid_card">
          <div className="ProjectInformationForm__mid_card_title">Pre-Evaluation Feedback</div>
          <div className="ProjectInformationForm__mid_card_date">12 October, 2022</div>
          <div className="ProjectInformationForm__progress_bar">
            <ProgressBar color="#17BEBB" percentage="80" />
          </div>
        </div>
        <div className="ProjectInformationForm__mid_card">
          <div className="ProjectInformationForm__mid_card_title">Intake Form</div>
          <div className="ProjectInformationForm__mid_card_date">16 October, 2022</div>
          <div className="ProjectInformationForm__progress_bar">
            <ProgressBar color="#17BEBB" percentage="20" />
          </div>
        </div>
      </div>
      <hr />
      <ProjectInformationFormWithBody />
    </div>
  )
}

export default ProjectInformationForm
