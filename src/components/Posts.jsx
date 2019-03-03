import React, { Component } from "react";
import UserService from '../ApiServices/UserService.js'

class Posts extends React.Component {
  constructor(props) {
     super(props);
     
     this.state = {
        data: '0x3231B0004588d8685Ee50D06B28E96ba4EEec82D'
     }
     this.updateState = this.updateState.bind(this);
  };
  updateState(e) {
     this.setState({data: e.target.value});
  }
  render() {
     return (
        <div>
           <input type = "text" value = {this.state.data} 
              onChange = {this.updateState} />
           <h4>{this.state.data}</h4>

           <PostsList search={this.state.data}/>
        </div>
     );
  }
}

class PostsList extends Component {

  render() {
    return (
      <div>
        <h2>Posts</h2>
          <ul>
            {UserService.getPosts(this.props.search).map(function(post,index){
              return (
                <div className="card tweet-post">
                  <div class="card-body">
                    <h5 className="card-title">{post.authorUser}</h5>
                    <p className="card-text">{post.data}</p>
                  </div>
                  <div className="card-body">
                    <span className="text-muted">{post.timestamp}</span>
                  </div>
                </div>
              );
            })}
          </ul>
      </div>
    );
  }
}

export default Posts;
