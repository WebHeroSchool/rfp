import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './CheckboxLabels.module.css';
import classnames from 'classnames';



  function CheckboxLabels( {value, isDone}) {
    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
      checkedF: true,
      checkedG: true,
    });
  
    const handleChange = name => event => {
      setState({ ...state, [name]: event.target.checked });
    };
  
    return (
      <FormGroup 
       className ={classnames({
         [styles.item]: true,
         [styles.done]: isDone,
     })
    }
       row>
       
        <FormControlLabel control={<Checkbox value="checkedC" />} label={value} />
       
      </FormGroup>
    );
  }

  export default CheckboxLabels;