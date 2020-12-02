import React from "react"
import { motion } from "framer-motion";
import '../../styles/projects.scss';
import { A } from '.';
import { useInView } from 'react-intersection-observer';

// TODO: scroll reveal 
// https://codesandbox.io/s/framer-motion-animate-in-view-gqcc8?file=/src/index.js:479-487
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
	const [isHovered, setHover] = React.useState(false);
	const { ref, inView } = useInView({
		root: document,
		rootMargin: `-50% 0px`,
	});

	return (
		<motion.li
			ref={ref}
			variants={variants}
			className="project"
			onHoverStart={() => setHover(true)}
			onHoverEnd={() => setHover(false)}
		>
			<A href={github} target="_blank" >
				<motion.span
					className="row"
					variants={{
						visible: {
							opacity: 1,
							scale: 1.01,
						},
						invisible: {
							opacity: 0.3,
							scale: 1
						}
					}}
					animate={inView ? "visible" : "invisible"}
					whileHover="visible"
					transition={{ duration: 0.3 }}
				>
					<span className="project-order">{id < 9 ? 0 : null}{id}</span>
					<h1 className="project-name">{name}</h1>
					<p className="project-slug">{slug}</p>
				</motion.span>
			</A>
			<motion.img
				className="hoveredImg"
				key="projectsImg"
				src={preview}
				variants={{
					show: {
						opacity: 1,
						visibility: "visible",
						scale: 1,
					},
					hide: {
						opacity: 0,
						visibility: "hidden",
						scale: 0.98,
					}
				}}
				animate={isHovered ? "show" : "hide"}
				transition={{
					duration: 0.2,
					ease: 'easeInOut'
				}}
			/>
		</motion.li>
	)
}