import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar  from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
const [inputSearch , setInputSearch] = useState("");

  return (
    <div className="header">
       <div className='header__left'>
            <MenuIcon/>  
            <Link to="/"> 
            <img  
            className="header__logo" src="https://www.perl.com/images/63/EC2F7326-FF2E-11E3-B942-5C05A68B9E16.png"
            alt=''/>
            </Link>
        </div>

       <div className='header__middle'>
            <input onChange={(e) =>setInputSearch(e.target.value) } value={inputSearch} placeholder = "Search" type="text" />
            <Link to= {`/search/ ${inputSearch}`}>
              <SearchIcon className='header__middleButton' />
            </Link>
        </div>

        <div className='header__right'>
            <AppsIcon           className='header__icon'/>
            <VideoCallIcon      className='header__icon'/>
            <NotificationsIcon  className='header__icon'/>
            <Avatar  src="https://static.toiimg.com/thumb/msid-90049451,imgsize-1784611,width-800,height-600,resizemode-75/90049451.jpg"
            alt ="Utkarsh"/>
        </div>
        
    </div>
  )
  }

export default Header;