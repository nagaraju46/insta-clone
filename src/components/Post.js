import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";

import ChatBubbleTwoToneIcon from "@material-ui/icons/ChatBubbleTwoTone";
import ShareIcon from "@material-ui/icons/Share";
import LocationOnSharpIcon from "@material-ui/icons/LocationOnSharp";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
export default function Post(props) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" src="" alt="nagraj" />
        <h3>{props.username}</h3>
      </div>
      <div className="post__location">
        <LocationOnSharpIcon />
        {props.location}
      </div>

      <img className="post__img" src={props.imgurl} alt="" />

      <h4 className="post__text">
        <strong>{props.username}</strong> :<i>{props.caption}</i>
      </h4>
      <div className="post__icons">
        <FavoriteIcon className="icon1" />
        <ChatBubbleTwoToneIcon className="icon2" />
        <ShareIcon className="icon3" />
        <BookmarkBorderIcon className="icon4" />
      </div>
    </div>
  );
}
