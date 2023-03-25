import React, { useState } from 'react';
import '../style/components/ProjectInformationFormWithFields.css';
import MultiSelectOption from './MultiSelectOption';
import RadioGroupComponent from './RadioGroupComponent';
import SelectOption from './SelectOption';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ProjectInformationFooter from '../components/ProjectInformationFooter';
import {
  SOURCING_OPTION, RANGE_OF_USER, EXPECTED_SPEND, WILL_SHARE_PII, TYPE_OF_VENDORS, VENDOR_ACCESS_TO_AWS, IS_ATTACHED_DOCUMENT, SOURCING_OPTION_ERROR,
  RANGE_OF_USER_ERROR,
  EXPECTED_SPEND_ERROR,
  WILL_SHARE_PII_ERROR,
  TYPE_OF_VENDORS_ERROR,
  VENDOR_ACCESS_TO_AWS_ERROR,
  IS_ATTACHED_DOCUMENT_ERROR,
} from '../constants';

const ProjectInformationFormWithFields = () => {
  const [state, setState] = useState({
    [SOURCING_OPTION]: '',
    [RANGE_OF_USER]: '',
    [EXPECTED_SPEND]: '',
    [WILL_SHARE_PII]: undefined,
    [TYPE_OF_VENDORS]: [],
    [VENDOR_ACCESS_TO_AWS]: undefined,
    [IS_ATTACHED_DOCUMENT]: undefined,

    [SOURCING_OPTION_ERROR]: false,
    [RANGE_OF_USER_ERROR]: false,
    [EXPECTED_SPEND_ERROR]: false,
    [WILL_SHARE_PII_ERROR]: false,
    [TYPE_OF_VENDORS_ERROR]: false,
    [VENDOR_ACCESS_TO_AWS_ERROR]: false,
    [IS_ATTACHED_DOCUMENT_ERROR]: false,
  });
  const handleFileChange = (e) => {
    console.log("handleFileChange");
    setState(prevState => {
      return { ...prevState, [IS_ATTACHED_DOCUMENT]: true }
    });
  }
  console.log("state", state)
  return (
    <>
      <div className="ProjectInformationFormWithFields__container">
        <div className="faded_container py-2 mb-2">
          <div className="ProjectInformationFormWithFields__heading p-2">General Information</div>
          <div className="white_container mx-2">
            <div className="mx-3 py-2">
              <div className="light_label">
                Question 1
              </div>
              <hr style={{ marginTop: '0px' }} />
              <div className="dark_label" style={{ marginTop: '-9px' }}>
                Please select your sourcing option
              </div>
              <SelectOption label="Choose sourcing" name={SOURCING_OPTION} state={state} setState={setState} />
              {state[SOURCING_OPTION_ERROR] && <div className="text-danger">Please select sourcing option</div>}
            </div>
          </div>
          <div className="white_container m-2">
            <div className="mx-3 py-2">
              <div className="light_label">
                Question 2
              </div>
              <hr style={{ marginTop: '0px' }} />
              <div className="dark_label" style={{ marginTop: '-9px' }}>
                Number range of users who will use the product:<span className="text-warning">*</span>
              </div>
              <SelectOption label="Choose users range" name={RANGE_OF_USER} state={state} setState={setState} />
              {state[RANGE_OF_USER_ERROR] && <div className="text-danger">Please select range</div>}
            </div>
          </div>
          <div className="white_container m-2">
            <div className="mx-3 py-2">
              <div className="light_label">
                Question 3
              </div>
              <hr style={{ marginTop: '0px' }} />
              <div className="dark_label" style={{ marginTop: '-9px' }}>
                Provide an expected spend:
              </div>
              <SelectOption label="Choose expense range" name={EXPECTED_SPEND} state={state} setState={setState} />
              {state[EXPECTED_SPEND_ERROR] && <div className="text-danger">Please select expected spend</div>}
            </div>
          </div>
        </div>
        <div className="faded_container py-2 mb-2">
          <div className="ProjectInformationFormWithFields__heading px-2">Product Feedback</div>
          <div className="white_container m-2">
            <div className="mx-3 py-2">
              <div className="light_label">
                Question 4
              </div>
              <hr style={{ marginTop: '0px' }} />
              <div className="dark_label" style={{ marginTop: '-9px' }}>
                Will you be sharing PII with the vendor?<span className="text-warning">*</span>
              </div>
              <RadioGroupComponent name={WILL_SHARE_PII} setState={setState} />
              {state[WILL_SHARE_PII_ERROR] && <div className="text-danger">Please select PII</div>}
            </div>
          </div>
          <div className="white_container m-2">
            <div className="mx-3 pt-2">
              <div className="light_label">
                Question 5
              </div>
              <hr style={{ marginTop: '0px' }} />
              <div className="dark_label" style={{ marginTop: '-9px' }}>
                What typeof PII will the vendor have access to?<span className="text-warning">*</span>
              </div>
              <MultiSelectOption label="Choose one or more PII type" name={TYPE_OF_VENDORS} state={state} setState={setState} />
              {state[TYPE_OF_VENDORS_ERROR] && <div className="text-danger">Please select any one of PII vendor</div>}
            </div>
          </div>
          <div className="white_container m-2">
            <div className="mx-3 py-2">
              <div className="light_label">
                Question 6
              </div>
              <hr style={{ marginTop: '0px' }} />
              <div className="dark_label" style={{ marginTop: '-9px' }}>
                Will the vendor have access to AWS Account?<span className="text-warning">*</span>
              </div>
              <RadioGroupComponent name={VENDOR_ACCESS_TO_AWS} setState={setState} />
              {state[VENDOR_ACCESS_TO_AWS_ERROR] && <div className="text-danger">Select Yes or No</div>}
            </div>
          </div>
        </div>
        <div className="faded_container py-2 mb-2">
          <div className="ProjectInformationFormWithFields__heading px-2">Upload Documents</div>
          <div className="white_container m-2">
            <div className="mx-3 py-2">
              <div className="light_label">
                Question 7
              </div>
              <hr style={{ marginTop: '0px' }} />
              <div className="dark_label pb-2" style={{ marginTop: '-9px' }}>
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
                <input id="file-input" type="file" onChange={handleFileChange} style={{ display: "none" }} />
              </div>
              {state[IS_ATTACHED_DOCUMENT_ERROR] && <div className="text-danger">You haven't selected any file yet</div>}
            </div>
          </div>
        </div>
      </div>
      <ProjectInformationFooter state={state} setState={setState} />
    </>
  )
}

export default ProjectInformationFormWithFields
