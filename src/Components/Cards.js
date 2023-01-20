import React, { Fragment } from 'react';
import Loader from '../preview.gif';
import { Grid } from '@mui/material/';
import { Pagination } from '@mui/material/';
import { withStyles } from '@mui/styles';





const Cards = ({ trending, fetchTrending, totalPage, page, fetchTrailer }) => {

  const classes = withStyles();

  return <Fragment>
    <div className="mainContent">
      {!trending ?
        <div className="loadingMain">
          <img className='loading' src={Loader} alt="" />
        </div> :
        <Fragment>
          <h2>Trending Movies</h2>
          <div className="trendingContainer">
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 4, md: 25 }}>
              {trending.map(movie =>
                <Grid item xs={2} sm={4} md={4} key={movie.id} >
                  <div onClick={() => fetchTrailer(movie.id)} className="CARD">
                    <div className="top">
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    </div>
                    <div className="bottom">
                      <h3>{movie.title || movie.name}</h3>
                      <p>{movie.release_date}</p>
                    </div>
                  </div>
                </Grid>)}
            </Grid>
          </div>
          <div className="pagination">
            <Pagination
              count={totalPage}
              style={{
                backgroundColor: 'rgba(165, 165, 165, 0.886)',
                height: "45px",
                display: "flex",
                alignItems: "center",
                borderRadius: '5px'
              }}
              onChange={fetchTrending}
              page={page}
              itemsCountPerPage={10}
              totalItemsCount={10}
              className={classes.root} color="primary" />
          </div>
        </Fragment>
      }
    </div>
  </Fragment>;
};

export default Cards;
