import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './DeleteButton.module.css';



function DeleteButton () {
return <IconButton aria-label="Delete" className={styles['buttondelete']}>
          <DeleteIcon fontSize='small' />
        </IconButton>
}

export default DeleteButton;