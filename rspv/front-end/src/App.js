import React, { Component } from 'react';
import { BrowserRouter, Router, Redirect, Switch } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';

import './App.css';

class App extends Component {
  render() {
    return (

      
      <BrowserRouter>
      <Switch>
      <Redirect from="/" to="/autho" exact />
      <Router path ="/auth" component ={AuthoPage} />
      <Route path="/events" Component = {Bookings} />
      <Route path="/bookings" Component = {Events} />
      </Switch>
      </BrowserRouter>
  

    );
  }
}

export default App;
