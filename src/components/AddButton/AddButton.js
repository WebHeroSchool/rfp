import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



function ButtonSizes({onClickAdd}) {

  return (
      <div>
        <Fab
          size='small'
          color='secondary'
          aria-label='Add'
          onClick={onClickAdd}
        >
          <AddIcon />
        </Fab>
      </div>
  );
}

export default ButtonSizes;


