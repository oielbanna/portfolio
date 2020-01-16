import React from 'react';
import './styles/App.scss';

import { Cursor, A, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />

      <A
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </A>
    </div>
  );
}

export default App;
