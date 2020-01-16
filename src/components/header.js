import React from 'react';
import A from "./a";
import '../styles/header.scss';

function Header() {
  return (
    <header className="App-header">
      


      <div className="header__links">
        <A href="#">LN</A>
        <A href="#">GT</A>
      </div>
    </header>
  );
}

export default Header;
