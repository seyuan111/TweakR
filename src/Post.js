import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return <div className="post">
    <div className="post__avatar">
        <Avatar />
    </div>
    <div className="post__body">
        <div className="post__header">
            <div className="post__headerText">
                <h3>This is a test{" "} <span className="post__headerSpecial">
                    <VerifiedUserIcon className="post__badge" />
                    @Thisisatest
                </span>
                </h3>
            </div>
            <div className="post__headerDescription">
                <p>I will come next week. Week after. I will come in soon</p>
            </div>
        </div>
        <img src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1" alt="" />
        <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
        </div>
    </div>
  </div>;
}

export default Post