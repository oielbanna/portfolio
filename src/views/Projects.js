import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from '../constants';
import SingleProject from "./components/SingleProject";
import '../styles/projects.scss';

const Projects = () => {
	return (
		<section id="projects">
			<h1 className="section-title">&#47;&#47; projects im proud of &#8212; a non comprehensive list</h1>
			<motion.ul id="projects-list">
				{PROJECTS.map((project, i) => {
					return <SingleProject key={i + 1} id={i} {...project} />
				})}
			</motion.ul>
		</section>
	)
}

export default Projects;