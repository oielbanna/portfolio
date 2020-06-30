import React, { Suspense } from 'react';
import './styles/App.scss';
import './i18n'
import { Cursor, Header, Intro, Navigation } from "./components";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        
        <Cursor />
        <Header />
        <section style={{width: "100%"}}><Intro /></section>
        
      </div>
    </Suspense>
  );
}

export default App;
