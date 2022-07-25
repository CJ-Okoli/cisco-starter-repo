import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import Address from './Address';

class App extends Component{
  render() {
    return (
      <div className='App'>
        <Banner />
        <Exhibit />
        <Address />
        <Address />
      </div>
    )
  }
}

export default App;
