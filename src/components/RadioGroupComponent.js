import * as React from 'react';
import '../style/components/RadioGroupComponent.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioGroupComponent = ({ name, state, setState }) => {
  const handleChange = (e) => {
    // console.log(e.target.value);
    setState(preState => {
      return { ...preState, [name]: JSON.parse(e.target.value) };
    });
  }
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="mx-2"
        onChange={handleChange}
      >
        <FormControlLabel className="custom_radio_button" value={true} control={<Radio className="custom_radio" />} label="Yes" />
        <FormControlLabel className="custom_radio_button" value={false} control={<Radio className="custom_radio" />} label="No" />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioGroupComponent
