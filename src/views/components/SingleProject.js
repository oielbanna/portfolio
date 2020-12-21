import React, { useLayoutEffect, useRef, useContext, useState } from "react";
import { Context } from '../../context';
import { motion } from "framer-motion";
import '../../styles/projects.scss';
import { A } from '.';
import { useInView } from 'react-intersection-observer';


export default ({ name, slug, github, description, id }) => {
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
				updateSelectedProject(oldProject);
			}}
		>
			<Data {...{ id, name, slug, github }} />
		</motion.li >
	)
}


const Data = ({ id, name, slug, github }) => {
	const { updateSelectedProject } = useContext(Context);

	const el = useRef(null);
	const { ref, inView } = useInView({
		rootMargin: `-50% 0px`,
	});

	useLayoutEffect(() => {
		if(inView && el?.current) {
			// HACK: Having trouble calibraring properly with scroll direction.
			// its easier to just force this to be the second update by delaying it
			setTimeout(() => {
				if (id === 0 && window.scrollY < window.innerHeight) {
					updateSelectedProject(-1);
				} else {
					el.current.focus();
					updateSelectedProject(id)
				}
			}, 100)
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
				<p className="project-slug">{slug}</p>
			</motion.span>
		</A>
	);
}

