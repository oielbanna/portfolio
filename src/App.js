import React, { Suspense } from 'react';
import './styles/App.scss';
import './i18n'
import { Cursor, Header } from "./views/components";
import About from "./views/About"
import Intro from "./views/Intro"

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">

        <Cursor />
        <Header />
        <main>
          <Intro />
          <About />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
