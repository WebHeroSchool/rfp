import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function ButtonSizes({onClickAdd}) {

  return (
        <Fab
          size='small'
          color='secondary'
          aria-label='Add'
          onClick={onClickAdd}
        >
          <AddIcon />
        </Fab>
  );
}

export default ButtonSizes;


