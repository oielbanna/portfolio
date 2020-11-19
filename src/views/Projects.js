import React from "react"
import { projects } from '../constants';
import SingleProject from "./components/SingleProject";
import '../styles/projects.scss';

// This one is for staggering children
// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=/src/Example.tsx&file=/src/Navigation.tsx:112-290
export default () => {
	return (
		<section id="projects">
			{/* <h1>Projects I'm proud of</h1> */}
			<ul>
				{projects.map((project, i) => {
					return <SingleProject id={i + 1} {...project} />
				})}
			</ul>
		</section>
	)
}