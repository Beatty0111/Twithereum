import React, { Component } from "react";
import homepage from "./Home/reducers.js";
import PropTypes from 'prop-types';
import {getComments, getPosts} from './Home/actions.js'
class Posts extends Component {
  static propTypes = {
    username: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.string),
    posts: PropTypes.arrayOf(PropTypes.string),
    handleGetComments: PropTypes.func.isRequired,
    handleGetPosts: PropTypes.func.isRequired,
  }

  static defaultProps = {
    username: 'Person 1',
    comments: ['Hello World', 'Hackathon', 'Im to drunk to taste this chicken'],
    posts: ['sdfknskdnf', 'kjsdfnkjsdfn'],
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <p>
          <ul>
            {this.props.posts.map(function(post,index){
              return <li key={index}>{post}</li>
            })}
          </ul>
        </p>
      </div>
    );
  }
}
 
export default Posts;