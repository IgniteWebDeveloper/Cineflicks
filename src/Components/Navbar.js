import React from 'react';
import Logo from './Cineflicks-logos_white.png';
import {Link} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
;




const Navbar = () => {
  return <Typography>
      <nav className='Navbar'>
          <div className="logoSec">
            <img src={Logo} alt='LOGO'/>   
          </div>
          <div className="right">
          <div class="search-box">   
                <form id="searchfrm" class="search-text" action="/products/:page" method="POST">
                  <input  id="searchinpt" input="text" name="title" autocomplete="off" placeholder="Search for products,brands and more " />
                </form>
                  <div class="search-btn">
                     <SearchIcon />
                  </div>        
               </div>
              <a exact href="/">Home</a>
              <a exact href=".Trending">Trending</a>
          </div>
      </nav>
  </Typography>
};

export default Navbar;
