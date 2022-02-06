import React, { useEffect } from 'react';

const Trailer = ({trailerData}) => {
    console.log(trailerData);

  return <div className='trailerMain'>
      {trailerData ? 
      <div className="imageMain">
          <img className='backDrop' src={`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${trailerData.poster_path}`} alt="" />
          <div className="imageBlur"></div>
        <div className="content">
        <iframe className='trailerVideo' width="853" height="480" src={`https://www.youtube.com/embed/${trailerData.videos.results[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
        </div>
      </div>
      :''}
     
  </div>;
};

export default Trailer;
