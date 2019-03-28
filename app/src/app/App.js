import React, { Component } from 'react';
import Home from './../components/home/home';
import NavBar from './../components/navbar/navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
      </div>
    );
  }
}

export default App;
