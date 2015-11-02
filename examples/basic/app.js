import React from 'react';
import Cmp1 from '../../lib/index';

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>cmp1</h1>
        <Cmp1/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
