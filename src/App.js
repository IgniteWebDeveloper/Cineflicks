import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { Card, CardActions, Grid, Button, Typography, CardContent, Box } from '@mui/material/';
import Cards from './Components/Cards';
import { Route, Routes, useNavigate } from 'react-router-dom';




const App = () => {

  const [trending, settrending] = useState(null);

  useEffect(() => {

    if (!trending) {
      setTimeout(() => {
        fethTrending()
      }, 1600)
    }

  }, [trending]);

  const fethTrending = () => {
    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=9bf9a37935497cb8a2ccc58d4602c789')
      .then(d => d.json())
      .then(res => settrending(res.results))
  }

  console.log(trending);

  return <Typography>
    <div className='Main'>
      <Navbar />
      <Routes>
        <Route exact path={'/'} element={<Cards trending={trending}/>} />
      </Routes>
    </div>;
  </Typography>
};

export default App;
