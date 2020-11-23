import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { projects } from '../constants';
import SingleProject from "./components/SingleProject";
import '../styles/projects.scss';

// This one is for staggering children
// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=/src/Example.tsx&file=/src/Navigation.tsx:112-290

const staggerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default () => {
	return (
		<section id="projects">
			{/* <h1>Projects I'm proud of</h1> */}
			<motion.ul variants={staggerVariants} initial="closed" animate="open" id="projects-list">
				{projects.map((project, i) => {
					return <SingleProject key={i + 1} id={i + 1} {...project}/>
				})}
			</motion.ul>
		</section>
	)
}