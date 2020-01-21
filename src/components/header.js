import React from 'react';
import A from "./a";
import LanguageSelector from "./LanguageSelector";
import '../styles/header.scss';
import { motion } from "framer-motion"

function Header() {
  return (
    <header className="App-header">
      <A>
        <div className="header__menu">
          <motion.i className="icon-menu" whileHover={{}}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </motion.i>
          <span className="icon-menu__txt"><span>U</span><span>N</span><span>E</span><span>M</span></span>
        </div>
      </A>

      <div className="header__links">
        <A href="#">LN</A>
        <A href="#">GT</A>
      </div>

        <LanguageSelector className="header__lang"/>
    </header>
  );
}

export default Header;
