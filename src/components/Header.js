import React from "react";
import "./Header.css";
// eslint-disable-next-line
import { Link } from "react-router-dom";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/Send";
// import ExploreIcon from "@material-ui/icons/Explore";

import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";

export default function Header() {
  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb6elR4vThWFaWi6ZoOz0JRi7skLlzb3nS_Q&usqp=CAU"
        alt="logo"
      />
      <input placeholder="search" type="text" />

      <HomeIcon className="icon1" />
      <SendIcon className="icon2" />
      <FavoriteBorderSharpIcon classname="icon3" />
      {/* <ExploreIcon className="icon4" /> */}
    </div>
  );
}
