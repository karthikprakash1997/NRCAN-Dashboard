import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const CheckboxLabels = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Country 1" />
      <FormControlLabel required control={<Checkbox />} label="Country 2" />
      <FormControlLabel disabled control={<Checkbox />} label="Country 3" />
    </FormGroup>
  );
};
