import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd'
import MovieEdit from './components/MovieEdit'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/add-movie" component={MovieAdd} />
          <Route exact path="/edit-movie/:id" component={MovieEdit} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
