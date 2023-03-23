import React from 'react';
import Button from '@mui/material/Button';
import '../style/components/ProjectInformationFormWithFields.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProjectInformationFormWithFields = () => {
  return (
    <Container className="ProjectInformationFormWithFields">
      <Row className="ProjectInformationFormWithFields__left">
        <Col>
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
        <Col>
          <div className="ProjectInformationFormWithFields__right"></div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectInformationFormWithFields
