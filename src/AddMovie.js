import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    };
    const updatePrice = (e) => {
        setPrice(e.target.value);
    };
    const updateId = (e) => {
        setId(e.target.value);
    };

    const addMovie = (e) => {
        e.preventDefault();
        setMovies((prevMovies) => [
            ...prevMovies,
            { name: name, price: price, id: id },
        ]);
        setName('');
        setPrice('');
        setId('');
    };

    return (
        <form className="AddMovie" onSubmit={addMovie}>
            <h1>Add Movies</h1>
            <div>
                <label>Movie Name: </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={updateName}
                />
            </div>
            <div>
                <label>Movie Price: </label>
                <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={updatePrice}
                />
            </div>
            <div>
                <label>Movie ID: </label>
                <input type="text" name="id" value={id} onChange={updateId} />
            </div>
            <button className="btn">Submit</button>
        </form>
    );
};

export default AddMovie;
