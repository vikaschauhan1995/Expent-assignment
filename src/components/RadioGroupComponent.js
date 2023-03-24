import * as React from 'react';
import '../style/components/RadioGroupComponent.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioGroupComponent = () => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="mx-2"
      >
        <FormControlLabel className="custom_radio_button" value="yes" control={<Radio className="custom_radio" />} label="Yes" />
        <FormControlLabel className="custom_radio_button" value="no" control={<Radio className="custom_radio" />} label="No" />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioGroupComponent
