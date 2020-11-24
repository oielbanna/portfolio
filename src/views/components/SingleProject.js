import React from "react"
import { motion } from "framer-motion";
import '../../styles/projects.scss';
import { A } from '.';
import { useInView } from 'react-intersection-observer';

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
	// const { scrollY } = useViewportScroll()
	// const opacity = useTransform(scrollY, [0, 150, 300], [0.4, 1, 0.4]);
	const { ref, inView } = useInView({
		// threshold: 0,
		root: document,
		rootMargin: `-50% 0px`,
	});

	return (
		<motion.li
			ref={ref}
			variants={variants}
			className="project"
		>
			<A href={github} >
				<motion.span 
					className="row" 
					style={{ opacity: inView ? 1 : 0.3 }}
					// whileHover={{ opacity: 1 }} // causes errors, animation above stops working
				>
					<span className="project-order">{id < 9 ? 0 : null}{id}</span>
					<h1 className="project-name">{name}</h1>
					<p className="project-slug">{slug}</p>
				</motion.span>
			</A>
		</motion.li>
	)
}