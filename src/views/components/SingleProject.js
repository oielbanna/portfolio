import React, { useRef } from "react";
import { motion } from "framer-motion";
import '../../styles/projects.scss';
import { A } from '.';
import { useInView } from 'react-intersection-observer';


export default ({ id, ...props }) => {

	return (
		<motion.li
			className="project"
		>
			<Data {...{ id, ...props }} />
		</motion.li >
	)
}


const Data = ({ id, name, slug, github, stack }) => {
	const el = useRef(null);
	const { ref, inView } = useInView({
		rootMargin: `-50% 0px`,
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
				whileFocus="visible"
				transition={{ duration: 0.3 }}
				lang="en"
			>
				<span className="project-order">{id < 9 ? 0 : null}{id}</span>
				<h1 className="project-name">{name}</h1>
				<div>
					<p className="project-slug">{slug}</p>
					<ul className="project-stack">
					{stack.map((item) =>
						<li key={item} className="project-stack-item">{item}</li>
					)}
					</ul>
				</div>
			</motion.span>
		</A>
	);
}

