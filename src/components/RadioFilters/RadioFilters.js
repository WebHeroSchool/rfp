import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styles from './RadioFilters.module.css';

function FormControlLabelPosition() {
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset" className={styles.filters}>
      <FormLabel component="legend"className={styles.legend}>Filter</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
 
        <FormControlLabel
          value="all"
          control={<Radio color="primary" />}
          label="All"
          labelPlacement="end"
        />
        
        <FormControlLabel
          value="completed"
          control={<Radio color="primary" />}
          label="Completed"
          labelPlacement="end"
        />

        <FormControlLabel
          value="incompleted"
          control={<Radio color="primary" />}
          label="Incompleted"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default FormControlLabelPosition;