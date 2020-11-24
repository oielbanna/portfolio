import React from "react"
import { motion } from "framer-motion";
import '../../styles/projects.scss';
import { A } from '.';
import { useInView } from 'react-intersection-observer';

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
			<A href={github} >
				<motion.span
					className="row"
					variants={{
						visible: {
							opacity: 1,
						},
						invisible: {
							opacity: 0.3,
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
				src={preview}
				variants={{
					show: {
						visibility: "visible"
					},
					hide: {
						visibility: "hidden"
					}
				}}
				animate={isHovered ? "show" : "hide"}
			/>
		</motion.li>
	)
}