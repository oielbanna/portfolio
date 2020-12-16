import React, { Suspense } from 'react';
import './styles/App.scss';
import './i18n'
import { Cursor, Header } from "./views/components";
import About from "./views/About"
import Projects from "./views/Projects";
import Experience from './views/Experience';
import { Store } from './context';

function App() {
  return (
    <Suspense fallback={null}>
      <Store>
        <div className="App">
          <Cursor />
          <Header />
          <main>
            <About />
            <Experience />
            <Projects />
          </main>

        </div>
      </Store>
    </Suspense>
  );
}

export default App;
