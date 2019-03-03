import React, { Component } from "react";
import PostService from '../ApiServices/PostService.js'

class Tweet extends Component
{
    constructor(props) {
        super(props);
        
        this.state = {
           data: ''
        }
        this.updateState = this.updateState.bind(this);
     };
     updateState(e) {
        this.setState({data: e.target.value});
     }

    render(){
        return(
            <div>
                <input className="formBox" type = "text" value = {this.state.data}
                onChange = {this.updateState} />
                <input type="submit" onClick = {() => PostService.createPost(this.state.data)}/>
            </div>
        );
    }
}
export default Tweet;