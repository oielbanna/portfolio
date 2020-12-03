import React, { useLayoutEffect, useRef } from "react"
import { motion } from "framer-motion";
import '../../styles/projects.scss';
import { A } from '.';
import { useInView } from 'react-intersection-observer';

const variants = {
	open: {
		y: -10,
		opacity: 1,
	},
	closed: {
		y: 0,
		opacity: 0.1,
	}
};
export default ({ name, slug, github, description, preview, id }) => {
	const [isHovered, setHover] = React.useState(false);

	const { ref, inView } = useInView({
		root: document,
		rootMargin: '0px 0px -100px 0px'
	})
	return (
		<motion.li
			ref={ref}
			variants={variants}
			initial='closed'
			animate={inView ? 'open' : 'closed'}
			className="project"
			onHoverStart={() => setHover(true)}
			onHoverEnd={() => setHover(false)}
		>
			<Data {...{ id, name, slug, github }} />
			<Image preview={preview} isHovered={isHovered} />
		</motion.li >
	)
}

const Data = ({ id, name, slug, github }) => {
	const el = useRef(null);
	const { ref, inView } = useInView({
		root: document,
		rootMargin: `-50% 0px`,
	});
	useLayoutEffect(() => {
		if(inView && el.current) {
			el.current.focus();
		}
	});
	return (
		<A ref={el} href={github} target="_blank">
			<motion.span
				ref={ref}
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
	);
}

const Image = ({ preview, isHovered }) => {
	return (<motion.img
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
	/>);
}