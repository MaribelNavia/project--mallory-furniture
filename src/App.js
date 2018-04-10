import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';

import Header from './Components/Header';

import Featured from './Components/Featured';

import Slide from './Components/Slide';

import Browse from './Components/Browse';

import Footer from './Components/Footer';

import SingleProduct from './Components/Single-Product';

import Categories from './Components/Categories';

import Categories from './Components/Categories/Seating';

import NoMatch from './Components/NoMatch';

import './App.css';





class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/'component={Home} />
          <Route path='/categories/:categories' component={Categories} />
          <Route path='/products/:id' component={SingleProduct} />
          <Route path='/categories/:seating' component={Seating} />
          <Route component={NoMatch} />
        </Switch>  
        <Footer /> 
      </div>
    );
  }
}

export default App;
