import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import Signin from "./components/Signin";
import Login from "./components/Login";
import { db } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import ImageUpload from "./components/ImageUpload";

function App() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((item) => {
        return item.data();
      });
      setposts(data);
    });
  }, [posts]);

  const renderPosts = () => {
    return posts.map(({ caption, username, imgurl, location }, index) => {
      return (
        <Post
          caption={caption}
          username={username}
          key={index}
          imgurl={imgurl}
          location={location}
        />
      );
    });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/insta">
            <Header />
            <ImageUpload />
            <div className="app__post">{renderPosts()}</div>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
