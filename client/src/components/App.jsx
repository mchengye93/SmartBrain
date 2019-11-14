import React, { Component } from 'react';
import Navigation from './Navigation/Nagivation.js';
import Logo from './Logo/Logo.js';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm.js';
import Rank from './Rank/Rank.js';
// import Signin from './Signin/Signin.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <Rank />
        {/* <Signin /> */}
      </div>
    );
  }
}

export default App;