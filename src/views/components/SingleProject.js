import React, { useLayoutEffect, useRef, useContext, useState } from "react";
import { Context } from '../../context';
import { motion } from "framer-motion";
import '../../styles/projects.scss';
import { A } from '.';
import { useInView } from 'react-intersection-observer';


export default ({ id, ...props }) => {
	const { selectedProject, updateSelectedProject } = useContext(Context);
	const [oldProject, updateOldProject] = useState(-1);

	return (
		<motion.li
			className="project"
			onHoverStart={() => {
				updateOldProject(selectedProject)
				updateSelectedProject(id);
			}}
			onHoverEnd={() => {
				if (window.scrollY < (window.innerHeight * 2.3)) { // 2.3 because thats how far this section is down the scroll
					updateSelectedProject(-1);
				} else {
					updateSelectedProject(oldProject);
				}
			}}
		>
			<Data {...{ id, ...props }} />
		</motion.li >
	)
}


const Data = ({ id, name, slug, github, stack }) => {
	const { updateSelectedProject } = useContext(Context);

	const el = useRef(null);
	const { ref, inView } = useInView({
		rootMargin: `-50% 0px`,
	});

	useLayoutEffect(() => {
		if (inView && el?.current) {
			// HACK: Having trouble calibraring properly with scroll direction.
			// its easier to just force this to be the second update by delaying it
			setTimeout(() => {
				console.log(window.scrollY, (window.innerHeight * 2.3));
				if (window.scrollY < (window.innerHeight * 2.3)) { // 2.3 because thats how far this section is down the scroll
					updateSelectedProject(-1);
				} else {
					el.current.focus();
					updateSelectedProject(id)
				}
			}, 150)
		} else {
			updateSelectedProject(-1);
		}
	}, [inView, el, id, updateSelectedProject]);

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

