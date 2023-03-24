import React from 'react';
import Button from '@mui/material/Button';
import '../style/components/ProjectInformationFormWithBody.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectInformationFormWithFields from './ProjectInformationFormWithFields';

const ProjectInformationFormWithBody = () => {
  return (
    <div className="ProjectInformationFormWithBody">
      <Row className="ProjectInformationFormWithBody__left">
        <Col xs={4}>
          <Button className="button active" variant="outlined">
            General Information
          </Button>
          <Button className="button my-2" variant="outlined">
            Security & Privacy
          </Button>
          <Button className="button" variant="outlined">
            Upload Documents
          </Button>
        </Col>
        <Col className="ProjectInformationFormWithBody__right" xs={8}>
          <ProjectInformationFormWithFields />
        </Col>
      </Row>
    </div>
  )
}

export default ProjectInformationFormWithBody
