import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";



function ButtonSizes({onClickAdd}) {

  return (
    <div>
      <div>
        <Fab
          size="small"
          color="secondary"
          aria-label="Add"
          // className={classes.margin}
          onClick={onClickAdd}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default ButtonSizes;


