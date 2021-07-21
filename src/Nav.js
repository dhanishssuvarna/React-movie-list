import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    const getTotal = () => {
        return movies
            .map((movie) => {
                return movie.price;
            })
            .reduce((accum, curEle) => (accum += Number(curEle)));
    };
    return (
        <nav className="nav-bar">
            <h1>Movieeez</h1>
            <p>No. of Movies : {movies.length}</p>
            <p>Total Movie price : {getTotal()}</p>
        </nav>
    );
};

export default Nav;
