import React from 'react';
import { useHistory } from 'react-router-dom'

const SavedList = props => {

return(
<div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <div>
        <span className="saved-movie">{movie.title}</span>
        <button onClick={() => props.removeMovie(movie.id)} className="remove">x</button>
      </div>
    ))}
    <div 
      onClick={props.routeToHome}
      className="home-button">Home</div>
  </div>
  );
}

export default SavedList;
