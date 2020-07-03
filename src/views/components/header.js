import React from 'react';
import A from "./a";
import { Navigation } from "./nav";
import LanguageSelector from "./LanguageSelector";
import '../../styles/header.scss';

function Header() {
  return (
    <header className="App-header">
      <Navigation />

      {/* <div className="header__links">
        <A href="#">LN</A>
        <A href="#">GT</A>
      </div> */}

      {/* <LanguageSelector className="header__lang" /> */}
    </header>
  );
}

export default Header;
