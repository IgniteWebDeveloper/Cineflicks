import React from 'react';
import Logo from './Cineflicks-logos_white.png';
import { Typography } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';





const Navbar = ({fetchSearch}) => {
  return <Typography component={'span'} variant={'body2'}>
    <nav className='Navbar'>
      <div className="logoSec">
        <a href="/">
        <img src={Logo} alt='LOGO' />
        </a>
      </div>
      <div className="right">
        <div className="search-box">
          <form onSubmit={(event) => fetchSearch(event)} className="searchfrm" method="GET">
            <input className="searchinpt" input="text" name="query" autoComplete="off" placeholder="Search for movies, TV shows and more " />
            <button className='searchSubmit'>SEARCH</button>
          </form>
          <div className="search-btn">
            <SearchIcon />
          </div>
        </div>
        <a href="/">Home</a>
        <a href="#">Trending</a>
      </div>
    </nav>
  </Typography>
};

export default Navbar;
