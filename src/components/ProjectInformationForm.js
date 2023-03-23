import React from 'react';
import '../style/components/ProjectInformationForm.css';
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';

const ProjectInformationForm = () => {
  return (
    <div className="ProjectInformationForm__container">
      <div>Projects &gt; ... &gt; Project Information</div>
      <div className="ProjectInformationForm__head">
        <div>
          <div><h2>Request for Software</h2></div>
          <div>12 Oct - 26 Oct, 2023 <CircleSharpIcon size="small" /></div>
        </div>
        <div>
          <Button variant="outlined" color="info" endIcon={<ArrowForward />}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectInformationForm
