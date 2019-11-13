import React, { Component } from 'react';
import Navigation from './Navigation/Nagivation.js';
import Logo from './Logo/Logo.js';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm.js';

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <Navigation />
        <Logo />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;