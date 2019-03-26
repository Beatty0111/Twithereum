import React, { Component } from "react";
import UserService from '../ApiServices/UserService.js';
import PostsList from '../components/PostsList.jsx';

class Posts extends React.Component {
  constructor(props) {
     super(props);
     
     this.state = {
        address: '0x3231B0004588d8685Ee50D06B28E96ba4EEec82D',
		lastValidAddr: '0x3231B0004588d8685Ee50D06B28E96ba4EEec82D'
     }
     this.updateState = this.updateState.bind(this);
  };

  updateState(e) {
	var nextState = this.state;
	nextState.address = e.target.value;
	if(this.isValidAddr(nextState.address)) {
		nextState.lastValidAddr = nextState.address;
	}
	this.setState(nextState);
	console.log(this.state.lastValidAddr);
  }

  isValidAddr(addr) {
	let regex = /^0x[0-9A-Fa-f]{40}$/;
	return regex.test(addr);
  }

  render() {
     return (
        <div>
          <div>
            <h5 className="formTitle">User Wallet Address</h5>
            <input className="formBox" type = "text" value = {this.state.address}
              onChange = {this.updateState} />
          </div>
           <PostsList search={this.state.address}/>
        </div>
     );
  }
}

export default Posts;
