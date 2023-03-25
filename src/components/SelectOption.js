import * as React from 'react';
import '../style/components/SelectOption.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Form from 'react-bootstrap/Form';

const SelectOption = ({ label, name, state, setState }) => {
  const handleChange = (event) => {
    setState(preState => {
      return { ...preState, [name]: event.target.value };
    });
  };
  return (
    <Box sx={{ maxWidth: 306 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state?.name}
          label={label}
          onChange={handleChange}
          className="SelectOption"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      {/* <Form.Select aria-label="Default select example" className="SelectOption">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select> */}
    </Box>
  )
}

export default SelectOption
