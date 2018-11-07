import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import products from './data/products';

import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='App-Body'>
          <FilterableProductTable products={products} />
        </div>
      </div>
    );
  }
}

export default App;
