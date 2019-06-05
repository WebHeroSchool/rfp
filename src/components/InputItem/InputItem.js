import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./InputItem.module.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

class InputItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      helperText: '',
      error: false
    };

  }

  onButtonClick = () => {
    if(this.state.inputValue !== '') {
    this.setState({
      inputValue: ''
    })
    this.props.onClickAdd(this.state.inputValue);
  } else {
    this.setState({helperText: 'Do not fuck with me! No empty tasks!', error: true})
  }
}

  render() {

    return (
      <div className={styles.container}>
        <TextField
          className={styles.input}
          id="standard-full-width"
          label="Add task"
          style={{ margin: 5 }}
          placeholder="Type your task here"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          value={this.state.inputValue}
          onChange={event => this.setState({inputValue: event.target.value, error: false, helperText: ''})}
          helperText={this.state.helperText}
          error={this.state.error}
        />
        <div className={styles.button}>
          <Fab
            size="small"
            color="secondary"
            aria-label="Add"
            onClick={this.onButtonClick}
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
    ); 
  }
}

export default InputItem;
