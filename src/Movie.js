import React from 'react';

const Movie = ({ name, price, id }) => {
    return (
        <div className="movie">
            <h4>{name}</h4>
            <h2>${price}</h2>
            <p>ID : {id}</p>
        </div>
    );
};

export default Movie;
