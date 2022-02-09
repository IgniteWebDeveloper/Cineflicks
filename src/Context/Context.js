import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const State = createContext(null)

const Context = (props) => {
    const [trending, settrending] = useState(null);
    const [totalPage, settotalPage] = useState('');
    const [page, setpage] = useState(1);
    const [searchResults, setsearchResults] = useState(null);
    const [trailer, settrailer] = useState(null);

    const navigate = useNavigate();

    const fetchTrailer = (movie) => {
        fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=9bf9a37935497cb8a2ccc58d4602c789&append_to_response=videos`)
            .then(d => d.json())
            .then(res => {
                settrailer(res)
            })
        navigate('/movie-trailer')
    }


    return <State.Provider value={{
        trending,
        settrending,
        totalPage,
        settotalPage,
        page,
        setpage,
        searchResults,
        setsearchResults,
        trailer,
        settrailer,
        navigate,
        fetchTrailer
    }}>
        {props.children}
    </State.Provider>
}

export default Context