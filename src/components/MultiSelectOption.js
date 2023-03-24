import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import '../style/components/MultiSelectOption.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const MultiSelectOption = ({ label }) => {
  // const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          // id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          // MenuProps={MenuProps}
          className="MultiSelectOption"
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default MultiSelectOption
