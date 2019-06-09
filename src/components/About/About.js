import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false
    };
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className=''>
        <h1>{isLoading ? <CircularProgress /> : 'About me'}</h1>
      </div>
    );
  }
}
export default About;
