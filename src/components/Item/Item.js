import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
import CheckboxLabels from '../CheckboxLabels/CheckboxLabels';
import DeleteButton from '../DeleteButton/DeleteButton';

const Item = ({ value, isDone, onClickDone, onClickDelete, id }) => (
  <div
    className={classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })}
  >
    <CheckboxLabels
      value={value}
      checked={isDone}
      onClickDone={onClickDone}
      isDone={isDone}
      id={id}
    />
    <DeleteButton 
      onClickDelete={onClickDelete}
      id={id}
    />
  </div>
);

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default Item;
