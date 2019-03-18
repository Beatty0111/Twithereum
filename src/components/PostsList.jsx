import React from 'react';
import UserService from '../ApiServices/UserService.js';

class PostsList extends React.Component {
  constructor(props) {
		super(props);
		this.state = { address: props.address };
  }
  render() {
    return (
      <div>
          <ul>
            {UserService.getPosts(this.state.address).map(function(post,index){
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

export default PostsList;
