import React from 'react'
import "./header.css"
import AirbnbLogo from "../assets/AirbnbMock.png";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (

    <div className='header_container'>
        <img src={AirbnbLogo} alt="logo"/>
        <div>
            <input type="search"/>
            <SearchIcon/>
        </div>
        <div className='header_right'>
            <p>Become a host</p>
            <LanguageIcon/>
            <ArrowDropDownIcon/>
            <AccountCircleIcon/>
        </div>
        
    </div>
  )
}

export default Header