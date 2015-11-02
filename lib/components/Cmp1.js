import React from 'react';

export default class Cmp1 extends React.Component {
  render() {
    return <div onClick={ this.props.click }>{ this.props.name }</div>;
  }
}

