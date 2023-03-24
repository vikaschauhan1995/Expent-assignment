import React from 'react'
import ProjectInformationFooter from '../components/ProjectInformationFooter';
import ProjectInformationForm from '../components/ProjectInformationForm';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import '../style/pages/ProjectInformationIntakeForm.css';

const ProjectInformationIntakeForm = () => {
  return (
    <div className="ProjectInformationIntakeForm__container">
      <ResponsiveAppBar />
      <ProjectInformationForm />
      <ProjectInformationFooter />
    </div>
  )
}

export default ProjectInformationIntakeForm
