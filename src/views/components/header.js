import React from 'react';
import A from "./a";
import { Navigation } from "./nav";
import '../../styles/header.scss';

function Header() {
  return (
    <header className="App-header">
      <Navigation />
    </header>
  );
}

export default Header;
