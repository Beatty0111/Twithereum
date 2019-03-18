import React, { Component } from "react";

class LikeButton extends Component
{
    constructor(props){
        super(props);

        this.state = {
            value: false,
        }
    }

    render(){
        <div className = "likeButton">
            <img src={"../Assets/images/like_btn.png"} />
        </div>
    }
}
