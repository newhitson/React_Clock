import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';

class Widget extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <h1>clocks</h1>
          <Clock/>
      </div>
    );
  }

}

export default Widget;
