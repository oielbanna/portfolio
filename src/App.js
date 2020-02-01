import React, { Suspense } from 'react';
import './styles/App.scss';
import './i18n'
import { Cursor, Header, Intro } from "./components";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Cursor />
        <Header />
        <section><Intro /></section>
        
      </div>
    </Suspense>
  );
}

export default App;
