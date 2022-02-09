import React, { useContext } from 'react';
import Logo from './Cineflicks-logos_white.png';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
import {State} from '../Context/Context'





const Navbar = () => {

  const {setsearchResults, navigate} = useContext(State)

  const fetchSearch = (event) => {
    event.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9bf9a37935497cb8a2ccc58d4602c789&query=${event.target.query.value}`)
      .then(d => d.json())
      .then(res => {
        setsearchResults(res)
        navigate('/search')
      })
  }

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
        <a exact href=".Trending">Trending</a>
      </div>
    </nav>
  </Typography>
};

export default Navbar;
