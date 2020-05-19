import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

import SavedList from './Movies/SavedList';

const App = () => {
  
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

    const removeMovie = id  => {
      const movie = savedList.filter(movie => movie.id !== id);
      setSavedList(movie);
    }; 

  const history = useHistory();

  const routeToHome = () => {
    history.push('/');
  };

  return (
    <div>

      <SavedList list={savedList} routeToHome={routeToHome} removeMovie={removeMovie}/>    
    
      <Switch>

        <Route path={'/movies/:movieID'}>
          <Movie addToSavedList={addToSavedList}/>
        </Route>
        
        <Route path={'/'}>
          <MovieList />
        </Route>
      </Switch>

    </div>
  );
};

export default App;
