import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './DeleteButton.module.css';



const DeleteButton = ({ onClickDelete, id}) => 
  <IconButton 
        aria-label='Delete' 
        className={styles['buttondelete']}
        onClick={() => onClickDelete(id)}
        >
          <DeleteIcon fontSize='small' />
  </IconButton>;

export default DeleteButton;