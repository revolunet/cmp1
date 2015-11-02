import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Cmp1 from '../../lib/index';

class App extends Component {

  click() {
    alert('Roger that !');
  }

  render() {
    return (
      <div className='example'>
        <h1>cmp1</h1>
        <Cmp1 click={ this.click } name='Click me'/>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('container'));
