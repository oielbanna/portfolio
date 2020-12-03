import React from "react"
import { motion } from "framer-motion";
import { PROJECTS } from '../constants';
import SingleProject from "./components/SingleProject";
import '../styles/projects.scss';

export default () => {
	return (
		<section id="projects" style={{height: 1000}}>
			<h1 className="section-title">projects im proud of, updated&#8212;ish</h1>
			<motion.ul id="projects-list">
				{PROJECTS.map((project, i) => {
					return <SingleProject key={i + 1} id={i} {...project}/>
				})}
			</motion.ul>
		</section>
	)
}