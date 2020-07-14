import React, { Suspense } from 'react';
import './styles/App.scss';
import './i18n'
import { Cursor, Navigation } from "./views/components";
import About from "./views/About"
import Intro from "./views/Intro"
import Context from './context';

function App() {
  return (
    <Suspense fallback={null}>
      <Context.Provider>
        <div className="App">
          <Navigation />
          <Cursor />
          
          <main>
            <Intro />
            <About />
          </main>
          
        </div>
      </Context.Provider>
    </Suspense>
  );
}

export default App;
