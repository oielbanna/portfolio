import React from "react"
import { projects } from '../constants';
import SingleProject from "./components/SingleProject";
import '../styles/projects.scss';

export default () => {
	return (
		<section id="projects">
			<ul>
				{projects.map((project, i) => {
					return <SingleProject id={i + 1} {...project} />
				})}
			</ul>
		</section>
	)
}