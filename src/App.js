import React, { Component } from 'react';
import ExamplePage from './Components/Pages/ExamplePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <div className="container">
          <div className="row">
            <ExamplePage />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
