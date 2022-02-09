import React from 'react';
import Logo from './Cineflicks-logos_white.png';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
;





const Navbar = ({fetchSearch}) => {


  return <Typography>
    <nav className='Navbar'>
      <div className="logoSec">
        <a href="/">
        <img src={Logo} alt='LOGO' />
        </a>
      </div>
      <div className="right">
        <div className="search-box">
          <form onSubmit={(event) => fetchSearch(event)} className="searchfrm" method="GET">
            <input className="searchinpt" input="text" name="query" autocomplete="off" placeholder="Search for movies, TV shows and more " />
            <button className='searchSubmit'>SEARCH</button>
          </form>
          <div className="search-btn">
            <SearchIcon />
          </div>
        </div>
        <a exact href="/">Home</a>
        <a exact href="#">Trending</a>
      </div>
    </nav>
  </Typography>
};

export default Navbar;
