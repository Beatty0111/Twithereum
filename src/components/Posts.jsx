import React, { Component } from "react";
import UserService from '../ApiServices/UserService.js'

class Posts extends Component {

  render() {
    return (
      <div>
        <h2>Posts</h2>
          <ul>
            {UserService.getPosts().map(function(post,index){
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
