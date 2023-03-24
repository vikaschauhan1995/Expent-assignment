import React from 'react';
import '../style/components/ProjectInformationFormWithFields.css';
import MultiSelectOption from './MultiSelectOption';
import RadioGroupComponent from './RadioGroupComponent';
import SelectOption from './SelectOption';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const ProjectInformationFormWithFields = () => {
  return (
    <div className="ProjectInformationFormWithFields__container">
      <div className="faded_container">
        <div className="ProjectInformationFormWithFields__heading">General Information</div>
        <div className="white_container m-2">
          <div className="mx-3">
            <div className="light_label">
              Question 1
            </div>
            <hr style={{ marginTop: '0px' }} />
            <div className="dark_label">
              Please select your sourcing option
            </div>
            <SelectOption label="Choose sourcing" />
          </div>
        </div>
        <div className="white_container m-2">
          <div className="mx-3">
            <div className="light_label">
              Question 2
            </div>
            <hr style={{ marginTop: '0px' }} />
            <div className="dark_label">
              Number range of users who will use the product:<span className="text-warning">*</span>
            </div>
            <SelectOption label="Choose users range" />
          </div>
        </div>
        <div className="white_container m-2">
          <div className="mx-3">
            <div className="light_label">
              Question 3
            </div>
            <hr style={{ marginTop: '0px' }} />
            <div className="dark_label">
              Provide an expected spend:
            </div>
            <SelectOption label="Choose expense range" />
          </div>
        </div>
      </div>
      <div className="faded_container">
        <div className="ProjectInformationFormWithFields__heading">Product Feedback</div>
        <div className="white_container m-2">
          <div className="mx-3">
            <div className="light_label">
              Question 4
            </div>
            <hr style={{ marginTop: '0px' }} />
            <div className="dark_label">
              Will you be sharing PII with the vendor?<span className="text-warning">*</span>
            </div>
            <RadioGroupComponent />
          </div>
        </div>
        <div className="white_container m-2">
          <div className="mx-3">
            <div className="light_label">
              Question 5
            </div>
            <hr style={{ marginTop: '0px' }} />
            <div className="dark_label">
              What typeof PII will the vendor have access to?<span className="text-warning">*</span>
            </div>
            <MultiSelectOption label="Choose one or more PII type" />
          </div>
        </div>
        <div className="white_container m-2">
          <div className="mx-3">
            <div className="light_label">
              Question 6
            </div>
            <hr style={{ marginTop: '0px' }} />
            <div className="dark_label">
              Will the vendor have access to AWS Account?<span className="text-warning">*</span>
            </div>
            <RadioGroupComponent />
          </div>
        </div>
        <div className="faded_container">
          <div className="ProjectInformationFormWithFields__heading">Upload Documents</div>
          <div className="white_container m-2">
            <div className="mx-3">
              <div className="light_label">
                Question 7
              </div>
              <hr style={{ marginTop: '0px' }} />
              <div className="dark_label">
                Please attach any relevant contract or documents:
              </div>
              <div className="faded_container" style={{ height: '124px' }}>
                <label for="file-input" className='hover-cursor-pointer' style={{ width: '100%', height: '100%' }}>
                  <div id="dragAndDrop" style={{ width: '100%', height: '100%' }}>
                    <div><FolderOutlinedIcon /></div>
                    <div className="drag-and-drop-label-text">Drag and Drop file or <span style={{ color: '#17BEBB' }}><SearchOutlinedIcon style={{ height: '16px', marginRight: '-3px', marginTop: '-2px' }} />Browse</span></div>
                    <div className="drag-and-drop-description">Maximum File size: <b>8 MB</b></div>
                  </div>
                </label>
                <input id="file-input" type="file" onchange="previewFile(this);" style={{ display: "none" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInformationFormWithFields