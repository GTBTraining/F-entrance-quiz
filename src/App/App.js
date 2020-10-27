import React, { Component } from 'react';
import './App.scss';

import Mainpage from '../Mainpage/Mainpage';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Mainpage />
      </div>
    );
  }
}

export default App;
