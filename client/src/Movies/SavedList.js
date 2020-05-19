import React from 'react';

const SavedList = props => {
  
return(
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <div key={movie.id}>
        <span className="saved-movie">{movie.title}</span>
        <button onClick={() => props.removeMovie(movie)} className="remove">x</button>
      </div>
    ))}
    <div 
      onClick={props.clearList}
      className="clear-button">Clear</div>
  </div>
  );
}

export default SavedList;
