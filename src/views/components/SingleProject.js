import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import '../../styles/projects.scss';
import { A } from '.';
// the following tutorial is for making the opacity animation
// https://medium.com/better-programming/framer-motion-tutorials-make-more-advanced-animations-4344b686ea0a

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
export default ({ name, slug, github, description, preview, id }) => {
	const { scrollY } = useViewportScroll()
	const opacity = useTransform(scrollY, [0, 150, 300], [0.4, 1, 0.4]);

	return (
		<motion.li key={id} variants={variants} className="project" style={{ opacity }}>
			<A href={github}>
				<div className="row">
					<span className="project-order">{id < 9 ? 0 : null}{id}</span>
					<h1 className="project-name">{name}</h1>
					<p className="project-slug">{slug}</p>
				</div>
			</A>
		</motion.li>
	)
}