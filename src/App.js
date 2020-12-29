import React, { Suspense } from 'react';
import './styles/App.scss';
import { Cursor, Header, Footer } from "./views/components";
import About from "./views/About"
import Projects from "./views/Projects";
import Experience from './views/Experience';
import { Store } from './context';

function App() {
  return (
    <Suspense fallback={null}>
      <Store>
          <Cursor />
          <Header />
          <main >
            <About />
            <Experience />
            <Projects />
          </main>
          <Footer />
      </Store>
    </Suspense>
  );
}

export default App;
