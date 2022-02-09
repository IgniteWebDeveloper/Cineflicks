import React, { useContext, useEffect } from 'react';
import {State} from '../Context/Context'

const Trailer = () => {
  const {trailer} = useContext(State)
  console.log(trailer);

  return <div className='trailerMain'>
    {trailer ?
      <div className="imageMain">
        {trailer.poster_path ? 
        <img className='backDrop' src={`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${trailer.poster_path}`} alt="" />
        : ''}
        <div className="imageBlur"></div>
        <div className={(!trailer.videos.results[0] ? "noContent": "content")}>
          {!trailer.videos.results[0] ? 
          <h2>OOPS there is no Trailer Available</h2> 
          :<iframe className='trailerVideo' width="853" height="480" src={`https://www.youtube.com/embed/${trailer.videos.results[0].key}`} title="YouTube video player" frameborder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; allowfullscreen;" ></iframe>}
          <div className="Data">
            <h1>{trailer.title}</h1>
            <h4>{trailer.overview}</h4>
            <h5>GENRES</h5>
            {trailer.genres.map(g=><li>{g.name}</li>)}
          </div>
        </div>
      </div>
      : ''}
  </div>;

}

export default Trailer;
