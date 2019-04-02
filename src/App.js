import React, { Component } from 'react';
import './App.css';

import Example from './Example';
import Show from './Show';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Show/>
        </header>
      </div>
    );
  }
}

export default App;