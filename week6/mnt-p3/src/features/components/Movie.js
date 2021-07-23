import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovies, selectMovies } from '../media/mediaSlice';
import './navbar.css';


export function Movie() {

  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const [ newMovie, addMovie ] = useState('');
  
  const clearField = () => {
    addMovie('');
  }

  const movieList = movies.map((movie, id) =>
    <li key={id}>{movie}</li>
  );

  return (
    <div className = "containerbox">
        <div>
       
          <input
            type= "text"
            placeholder="Movie Name"
            value={newMovie}
            onChange={e => addMovie(e.target.value)}
          />
          <button
            onClick={() => dispatch(addMovies(newMovie), clearField())}
          >
            Add Movie
          </button>
        </div>
        <div>
        
          <ul>
          <h2>Movie List</h2>
            <h3>{movieList}</h3>
          </ul>
        </div>
    </div>
  );
}