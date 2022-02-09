import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { Card, CardActions, Grid, Button, Typography } from '@mui/material/';
import Cards from './Components/Cards';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Trailer from './Components/Trailer';
import Search from './Components/Search';
import { State } from './Context/Context'






const App = () => {

  const { trending,
    settrending,
    totalPage,
    settotalPage,
    page,
    setpage,
    searchResults,
    setsearchResults,
    trailer,
    settrailer,
    navigate } = useContext(State)

  useEffect(() => {

    if (!trending) {
      setTimeout(() => {
        fetchTrending()
      }, 1600)
    }

  }, [trending]);


  const fetchTrendings = (event) => {
    fetchTrending()
    let currPage = (page)
    currPage = +(event.target.innerText)
    setpage(currPage)
  }

  const fetchTrending = () => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=9bf9a37935497cb8a2ccc58d4602c789&page=${page}`)
      .then(d => d.json())
      .then(res => {
        settrending(res.results)
        settotalPage(res.total_pages)
      })
  }





  console.log(searchResults);


  return <Typography>
    <div className='Main'>
      <Navbar />
      <Routes>
        <Route exact path={'/'} element={<Cards fetchTrending={fetchTrendings} />} />
        <Route exact path={'/movie-trailer'} element={<Trailer />} />
        <Route exact path={'/search'} element={<Search searchResult={searchResults} />} />
      </Routes>
    </div>;
  </Typography>
};

export default App;
