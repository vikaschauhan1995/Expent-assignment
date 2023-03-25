import React from 'react';
import '../style/components/ProjectInformationFooter.css';
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import {
  SOURCING_OPTION_ERROR,
  RANGE_OF_USER_ERROR,
  EXPECTED_SPEND_ERROR,
  WILL_SHARE_PII_ERROR,
  TYPE_OF_VENDORS_ERROR,
  VENDOR_ACCESS_TO_AWS_ERROR,
  IS_ATTACHED_DOCUMENT_ERROR,

  SOURCING_OPTION,
  RANGE_OF_USER,
  EXPECTED_SPEND,
  WILL_SHARE_PII,
  TYPE_OF_VENDORS,
  VENDOR_ACCESS_TO_AWS,
  IS_ATTACHED_DOCUMENT,
} from '../constants';


const ProjectInformationFooter = ({ state, setState }) => {
  const checkErrorAndAlert = (setState) => {
    setState(prevState => {
      const obj = {};
      if (prevState[SOURCING_OPTION] === '') {
        obj[SOURCING_OPTION_ERROR] = true;
      } else {
        obj[SOURCING_OPTION_ERROR] = false;
      }
      if (prevState[RANGE_OF_USER] === '') {
        obj[RANGE_OF_USER_ERROR] = true;
      } else {
        obj[RANGE_OF_USER_ERROR] = false;
      }
      if (prevState[EXPECTED_SPEND] === '') {
        obj[EXPECTED_SPEND_ERROR] = true;
      } else {
        obj[EXPECTED_SPEND_ERROR] = false;
      }
      if (prevState[WILL_SHARE_PII] === undefined) {
        obj[WILL_SHARE_PII_ERROR] = true;
      } else {
        obj[WILL_SHARE_PII_ERROR] = false;
      }
      if (prevState[TYPE_OF_VENDORS].length === 0) {
        obj[TYPE_OF_VENDORS_ERROR] = true;
      } else {
        obj[TYPE_OF_VENDORS_ERROR] = false;
      }
      if (prevState[VENDOR_ACCESS_TO_AWS] === undefined) {
        obj[VENDOR_ACCESS_TO_AWS_ERROR] = true;
      } else {
        obj[VENDOR_ACCESS_TO_AWS_ERROR] = false;
      }
      if (prevState[IS_ATTACHED_DOCUMENT] === undefined) {
        obj[IS_ATTACHED_DOCUMENT_ERROR] = true;
      } else {
        obj[IS_ATTACHED_DOCUMENT_ERROR] = false;
      }
      return { ...prevState, ...obj };
    });
  }
  const submitForm = () => {
    if (
      state[SOURCING_OPTION_ERROR] === true ||
      state[RANGE_OF_USER_ERROR] === true ||
      state[EXPECTED_SPEND_ERROR] === true ||
      state[WILL_SHARE_PII_ERROR] === true ||
      state[TYPE_OF_VENDORS_ERROR] === true ||
      state[VENDOR_ACCESS_TO_AWS_ERROR] === true ||
      state[IS_ATTACHED_DOCUMENT_ERROR] === true) {
      console.log("checkErrorAndAlert=>1", checkErrorAndAlert(setState));
      return checkErrorAndAlert(setState);
    } else {
      console.log("checkErrorAndAlert=>", checkErrorAndAlert(setState));
      return checkErrorAndAlert(setState);
    }
  }
  return (
    <div className="ProjectInformationFooter__container">
      <div className="ProjectInformationFooter__innerContainer">
        <div>
          <Button variant="outlined" className="ProjectInformationFooter__button mx-4" color="info">
            Save and Continue later
          </Button>
        </div>
        <div>
          <Button onClick={submitForm} variant="contained" className="ProjectInformationFooter__button filled px-4" color="info" endIcon={<ArrowForward />}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectInformationFooter
