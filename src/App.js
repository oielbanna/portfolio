import React, { Suspense } from 'react';
import './styles/App.scss';
import './i18n'
import { Cursor, A, Header } from "./components";

function App() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

export default App;
