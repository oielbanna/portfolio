import React from 'react';
import '../../styles/header.scss';
import { CONTACTS } from '../../constants';
import { A } from '.';

function Header() {
  return (
    <header className="header">
      {/* <img src="logo" /> */}

      <ul className="social-container">
        {Object.entries(CONTACTS).map(([platform, data], key) => {
          return <A key={platform} href={data.URL}><li className="socialLink">{platform.toLowerCase()}</li></A>
        })}
      </ul>
    </header>
  );  
}

export default Header;
