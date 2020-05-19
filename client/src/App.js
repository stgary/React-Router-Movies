import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  
  const [savedList, setSavedList] = useState( [] );

  const history = useHistory();
  
  const routeToHome = () => {
    history.push('/');
  };

  const addToSavedList = (movie) => {
    const duplicate = savedList.some(m => m.id === movie.id)
      if (!duplicate) {
        setSavedList([...savedList, movie])
      }
      history.push('/');
  };

  const removeMovie = movie  => {
    const updatedList = savedList.filter(m => m.id !== movie.id);
    setSavedList(updatedList);
  };

  const clearList = () => {
    setSavedList([]);
  };

  return (
    <div>
      <SavedList list={savedList} clearList={clearList} removeMovie={removeMovie}/>    
      <Switch>
        <Route path={'/movies/:movieID'}>
          <Movie addToSavedList={addToSavedList} routeToHome={routeToHome}/>
        </Route>
        <Route path={'/'}>
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
