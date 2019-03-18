import React, { Component } from "react";
import UserService from '../ApiServices/UserService.js';
import PostsList from '../components/PostsList.jsx';

class Posts extends React.Component {
  constructor(props) {
     super(props);
     
     this.state = {
        address: '0x3231B0004588d8685Ee50D06B28E96ba4EEec82D'
     }
     this.updateState = this.updateState.bind(this);
  };
  updateState(e) {
     this.setState({data: e.target.value});
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
