import React from 'react';
import { useHistory } from "react-router-dom";

const SavedList = props => {

  const history = useHistory();
  const routeToHome = () => {
    history.push("/");
  };

  return(
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={routeToHome} className="home-button">Home</div>
    </div>
  );
}

export default SavedList;
