import React, { useLayoutEffect, useRef, useContext, useState } from "react";
import { Context } from '../../context';
import { motion } from "framer-motion";
import '../../styles/projects.scss';
import { A } from '.';
import { useInView } from 'react-intersection-observer';

// const SCROLL_UP = "up";
// const SCROLL_DOWN = "down";

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

export default ({ name, slug, github, description, id }) => {
	const { selectedProject, updateSelectedProject } = useContext(Context);
	const [oldProject, updateOldProject] = useState(-1);

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
		root: document,
		rootMargin: `-50% 0px`,
	});

	useLayoutEffect(() => {
		if(inView && el?.current) {
			// HACK: Having trouble calibraring properly with scroll direction.
			// its easier to just force this to be the second update by delaying it
			setTimeout(() => {
				el.current.focus();
				updateSelectedProject(id)
			}, 50)
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

