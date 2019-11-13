import React, { Component } from 'react';
import Navigation from './Navigation/Nagivation.js';
import Logo from './Logo/Logo.js';

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <Navigation />
        <Logo />
      </div>
    );
  }
}

export default App;