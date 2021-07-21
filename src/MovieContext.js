import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: 10,
            id: 23124,
        },
        {
            name: 'Thumbaad',
            price: 19,
            id: 24124,
        },
        {
            name: 'Inception',
            price: 15,
            id: 25124,
        },
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};
