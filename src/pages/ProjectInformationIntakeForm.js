import React from 'react'
import ProjectInformationForm from '../components/ProjectInformationForm';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import '../style/pages/ProjectInformationIntakeForm.css';

const ProjectInformationIntakeForm = () => {
  return (
    <div className="ProjectInformationIntakeForm__container">
      <ResponsiveAppBar />
      <ProjectInformationForm />
    </div>
  )
}

export default ProjectInformationIntakeForm
