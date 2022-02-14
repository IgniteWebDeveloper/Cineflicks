import React from 'react';

const Trailer = ({ trailerData }) => {
  console.log(trailerData);

  return <div className='trailerMain'>
    {trailerData ?
      <div className="imageMain">
        {trailerData.poster_path ? 
        <img className='backDrop' src={`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${trailerData.poster_path}`} alt="" />
        : ''}
        <div className="imageBlur"></div>
        <div className={(!trailerData.videos.results[0] ? "noContent": "content")}>
          {!trailerData.videos.results[0] ? 
          <h2>OOPS there is no Trailer Available</h2> 
          :<iframe className='trailerVideo' width="853" height="480" src={`https://www.youtube.com/embed/${trailerData.videos.results[0].key}`} title="YouTube video player" frameborder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; allowfullscreen;" ></iframe>}
          <div className="Data">
            <h1>{trailerData.title}</h1>
            <h4>{trailerData.overview}</h4>
            <h5>GENRES</h5>
            {trailerData.genres.map(g=><li>{g.name}</li>)}
          </div>
        </div>
      </div>
      : ''}
  </div>;

}

export default Trailer;
