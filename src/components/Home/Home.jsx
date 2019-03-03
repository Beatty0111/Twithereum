import React, { Component } from "react";
import homepage from "./reducers.js";
import PropTypes from 'prop-types';
import {getComments, getPosts} from './actions.js'

class Home extends Component {
  state = {
    username: 'Some Person',
    comments: {
      upvoteNum: 0,
      comment: "",
      authorUser: "",
      timeStamp: ""
    },
    posts: {
      upvoteNum: 0,
			title: "",
			description: "",
			authorUser: "",
			comments: []
    },
  };
  handleGetComments = this.handleGetComments.bind(this);

  handleGetComments(event) {
    event.persist();
    if (this.state.comments.length>=0){
      fetch('.././ApiServices/CommentService/', {
        credentials: "same-origin",
        method: "GET",
        headers: new Headers({
            "Content-Type": "text/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        }),
        body: JSON.stringify(),
        ret: {}
    })
        .then(function(response) {
            response.json().then(function(commentData) {
                const commentList = commentData;

                console.log(commentList);
                //console.log({ ...data.map.fieldNames[0] });
                //this.setState({ info: {...data.map.fieldNames[0]} });
                /*this.setState(data => ({
                  info: data.map.fieldNames[0].map(obj => Object.assign(obj))
                }));*/
                //console.log(this.state.info);
                console.log(response.headers.get("Content-Type"));
                console.log(response.headers.get("Date"));

                console.log(response.status);
                console.log(response.statusText);
                console.log(response.type);
                console.log(response.url);
            });
        })
        .catch(function(err) {
            console.log("Fetch Error :-S", err);
        });

}};
 /* static propTypes = {
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
  }*/
  render() {
    return (
      <div>
        <h2>{this.state.username}</h2>
 
        <p>
          <button className = "dmButton"
          onClick={this.handleGetComments}>Comments</button>
        </p>
      </div>
    );
  }
}
 
export default Home;