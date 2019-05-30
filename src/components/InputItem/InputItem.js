import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
const InputItem = () => (
    <TextField
          className={styles.input}
          id="standard-full-width"
          label="Add task"
          style={{ margin: 8 }}
          placeholder="Type the name of the task"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
);

export default InputItem;