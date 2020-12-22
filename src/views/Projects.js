import React, { useContext, useState } from "react";
import { Context } from '../context';
import { motion, useAnimation } from "framer-motion";
import { PROJECTS } from '../constants';
import SingleProject from "./components/SingleProject";
import '../styles/projects.scss';
import { useLayoutEffect } from "react";

const Image = () => {
	const { selectedProject } = useContext(Context);
	const controls = useAnimation()
	const [src, setSrc] = useState(PROJECTS[selectedProject]?.preview);

	useLayoutEffect(() => {
		async function doMagic() {
			await controls.start("hide")
			setSrc(PROJECTS[selectedProject]?.preview)
			await controls.start("show")
		}
		doMagic();
	}, [selectedProject, controls]);
	return (
		<motion.img
			className="hoveredImg"
			key="projectsImg"
			src={src}
			variants={{
				show: {
					opacity: 1,
					visibility: "visible",
					scale: 1,
					y: "-50%"
				},
				hide: {
					opacity: 0,
					visibility: "hidden",
					scale: 0.98,
					y: "-50%"
				}
			}}
			animate={controls}
			transition={{
				duration: 0.2,
				ease: 'easeInOut'
			}}
		/>
	);
}

export default () => {
	return (
		<section id="projects">
			<h1 className="section-title">projects im proud of &#8212; a non comprehensive list</h1>
			<motion.ul id="projects-list">
				{PROJECTS.map((project, i) => {
					return <SingleProject key={i + 1} id={i} {...project} />
				})}
			</motion.ul>
			<Image />
		</section>
	)
}

