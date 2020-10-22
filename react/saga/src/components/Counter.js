import React, { Component } from 'react';
import {connect} from 'react-redux'
import actions from '../store/actions/counter'
class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.asyncIncrement}>延迟一秒+1</button>
      </div>
    );
  }
}

export default connect(
  state=>state.counter1,
  actions
)(Counter);