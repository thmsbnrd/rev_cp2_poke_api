import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListOfPokemon from './components/ListOfPokemon';
import Pokemon from './components/Pokemon';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ListOfPokemon} />
        <Route exact path='/pokemon/:id' component={Pokemon} />
      </Switch>
    </div>
  );
}

export default App;
