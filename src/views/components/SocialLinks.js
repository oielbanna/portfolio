import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../../styles/header.scss';
import { CONTACTS } from '../../constants';
import { A } from './a';

const parentVariant = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.4 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
};



function Links({ isShown, isColumn }) {
	const GRID_DIRECTION = isColumn ? "gridTemplateColumns" : "gridTemplateRows";
	const DIRECTION = isColumn ? "y" : "x";
	const liVariants = {
		open: {
			[DIRECTION]: 0,
			opacity: 1,
			transition: {
				[DIRECTION]: { stiffness: 100, velocity: -10 }
			}
		},
		closed: {
			[DIRECTION]: 50,
			opacity: 0,
			transition: {
				[DIRECTION]: { stiffness: 100 }
			}
		}
	};
	return (
		<motion.ul
			variants={parentVariant}
			initial="closed"
			animate={isShown? "open" : "closed"}
			className="social-container"
			style={{ [GRID_DIRECTION]: `repeat(${Object.entries(CONTACTS).length}, 1fr)` }}
		>
			{Object.entries(CONTACTS).map(([platform, data], key) => {
				return (
					<A target="_blank" variants={liVariants} key={platform} href={data.URL}>
						<li className="socialLink" dangerouslySetInnerHTML={data.LOGO} />
					</A>
				);
			})}
		</motion.ul>
	);
}

Links.propTypes = {
	isColumn: PropTypes.bool
};

Links.defaultProps = {
  isColumn: false
};

export default Links;
