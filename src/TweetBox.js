import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core"

function TweetBox() {
  return <div className="tweetBox">
    <form>
        <div className="tweetBox__input">
            <Avatar></Avatar>
            <input placeholder="What's new" type="text" />
        </div>
        <input className="tweetBox__imageInput" placeholder="Image URL" type="text" />
        <Button className="tweetBox__tweetButton">Tweet</Button>
    </form>
  </div>;
}

export default TweetBox