import React, { Component } from "react";
import likeBtnImg from "../Assets/images/like_btn.png";
import "./LikeButton.scss"

class LikeButton extends Component
{
    constructor(props){
        super(props);

        this.state = {
            value: false,
        }
    }

    render(){
		return (
			<div className = "likeButton">
				<img src={likeBtnImg} />
			</div>
		);
    }
}

export default LikeButton;
