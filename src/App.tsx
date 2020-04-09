import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { MovieDetailsPage } from './components/MovieDetails/MovieDetails';
import { Nav } from './components/Nav/Nav';
import './App.scss';

export const App: FC = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          component={MainPage}
        />
        <Route
          path="/movies/:movieId"
          component={MovieDetailsPage}
        />
      </Switch>
    </>
  );
};

export default App;
