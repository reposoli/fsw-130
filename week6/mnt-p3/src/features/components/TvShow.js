import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTvShows, selectTvShows } from '../media/mediaSlice';
import './navbar.css';


export function TvShow(props) {

  const tvShows = useSelector(selectTvShows);
  const dispatch = useDispatch();
  const [ newTvShow, addTvShow, ] = useState('');
  

  const clearField = () => {
    addTvShow('');
  };

  const tvShowList = tvShows.map((tvshow, id) =>
    <li key={id}>{tvshow}</li>
  );

  return (
    <div className = "containerbox">
      <div>
      
        <input
          type= "text" 
          placeholder="Tv Show Name"
          value={newTvShow}
          onChange={e => addTvShow(e.target.value)}
        />
        <button
          onClick={() => dispatch(addTvShows(newTvShow), clearField())}
        >
          Add Show
        </button>
        
      </div>
      
      <div>
        <ul>

      <h2>TV Show List</h2>
          <h3>{tvShowList}</h3>
        </ul>
      </div>
    
    </div>
  );
}