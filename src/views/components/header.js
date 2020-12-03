import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/header.scss';
import { CONTACTS } from '../../constants';
import { A } from '.';

const parentVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.4 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const liVariants = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			x: { stiffness: 100, velocity: -10 }
		}
	},
	closed: {
		x: 50,
		opacity: 0,
		transition: {
			x: { stiffness: 100 }
		}
	}
};
function Header() {
  return (
    <header className="header">
      {/* <img src="logo" /> */}

      <motion.ul 
        variants={parentVariant} 
        initial="closed" 
        animate="open" 
        className="social-container" 
        style={{gridTemplateRows: `repeat(${Object.entries(CONTACTS).length}, 1fr)`}}
      >
        {Object.entries(CONTACTS).map(([platform, data], key) => {
          return (
            <A variants={liVariants} key={platform} href={data.URL}>
              <li className="socialLink">{platform.toLowerCase()}</li>
            </A>
          );
        })}
      </motion.ul>
    </header>
  );  
}

export default Header;
