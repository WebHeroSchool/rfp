import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './CheckboxLabels.module.css';
import classnames from 'classnames';

function CheckboxLabels({ value, isDone, onClickDone, id }) {
  return (
    <FormGroup
      className={classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })}
      row
    >
      <FormControlLabel
        control={
          <Checkbox
            //value='checked'
            checked={isDone}
            onClick={() => onClickDone(id)}
          />
        }
        label={value}
      />
    </FormGroup>
  );
}

export default CheckboxLabels;
