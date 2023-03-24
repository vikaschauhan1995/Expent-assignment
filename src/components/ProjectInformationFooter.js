import React from 'react';
import '../style/components/ProjectInformationFooter.css';
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';

const ProjectInformationFooter = () => {
  return (
    <div className="ProjectInformationFooter__container">
      <div className="ProjectInformationFooter__innerContainer">
        <div>
          <Button variant="outlined" className="ProjectInformationFooter__button mx-4" color="info">
            Save and Continue later
          </Button>
        </div>
        <div>
          <Button variant="contained" className="ProjectInformationFooter__button filled px-4" color="info" endIcon={<ArrowForward />}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectInformationFooter
