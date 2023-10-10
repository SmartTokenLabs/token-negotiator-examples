import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import TokenNegotiatorContext from './TokenNegotiator';

function App() {

  const { tokenNegotiator } = useContext(TokenNegotiatorContext);

  if (tokenNegotiator) tokenNegotiator.negotiate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div class="overlay-tn"></div>
    </div>
  );
}

export default App;
