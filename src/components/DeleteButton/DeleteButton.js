import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './DeleteButton.module.css';

const DeleteButton = ({ onClickDelete, id }) => (
  <IconButton
    aria-label='Delete'
    className={styles['buttondelete']}
    onClick={() => onClickDelete(id)}
  >
    <DeleteIcon fontSize='small' />
  </IconButton>
);

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default DeleteButton;
