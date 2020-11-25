import React, { Suspense } from 'react';
import './styles/App.scss';
import './i18n'
import { Cursor } from "./views/components";
import About from "./views/About"
import Projects from "./views/Projects";
import Experience from './views/Experience';
import Context from './context';

function App() {
  return (
    <Suspense fallback={null}>
      <Context.Provider>
        <div className="App">
          <Cursor />

          <main>
            {/* <Intro /> */}
            <About />
            <Experience />
            <Projects />
          </main>

        </div>
      </Context.Provider>
    </Suspense>
  );
}

export default App;
