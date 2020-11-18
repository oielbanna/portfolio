import React from "react"
import { projects } from '../constants';
import Project from "./components/Project";

export default () => {
	return (
		<section>
			<ul>
				{projects.map((project, i) => {
					return <Project id={i + 1} {...project} />
				})}
			</ul>
		</section>
	)
}