import React from 'react'
import "./Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcons" />
          <input placeholder="Search" type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What is new</h2>

          <TwitterTweetEmbed tweetId={"858551177860055040"} />
          <TwitterTimelineEmbed sourceType="profile" screenName="seyuan1111" options={{ height: 400}} />
        
          <TwitterShareButton url={"https://www.facebook.com/sean.yuan2"} options={{ text: "Let's code", via: "Sean Yuan"}} />
        </div>
    </div>
  )
}

export default Widgets