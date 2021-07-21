import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <h1>Movie List</h1>
            <div className="container">
                {movies.map((movie) => (
                    <Movie
                        name={movie.name}
                        price={movie.price}
                        id={movie.id}
                        key={movie.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
