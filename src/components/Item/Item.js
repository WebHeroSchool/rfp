import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import CheckboxLabels from '../CheckboxLabels/CheckboxLabels';
import DeleteButton from '../DeleteButton/DeleteButton';

const Item = ({ value, isDone, classes, onClickDone }) => (
    <div  className ={classnames({
            [styles.item]: true,
            [styles.done]: isDone,
        })
        }>
        <CheckboxLabels 
        value={value} 
        checked={isDone}
        onClick={() => onClickDone(isDone)}
        />
        <DeleteButton />
    </div>
);

export default Item;