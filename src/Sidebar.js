import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationNoneIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAlt from '@mui/icons-material/ListAlt';
import PermIdentity from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@material-ui/core';

const Sidebar = () => {
  return (
    <div className="sidebar">
        {/* twitter icon */}

        <TwitterIcon className="sidebar__twitterIcon"/>

        <SidebarOption Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationNoneIcon} text="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon} text="Mail"/>
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark"/>
        <SidebarOption Icon={ListAlt} text="List"/>
        <SidebarOption Icon={PermIdentity} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>
        {/* sidebar option */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
        {/* sidebar option */}
    </div>
  )
}

export default Sidebar