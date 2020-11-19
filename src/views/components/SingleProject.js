import React from "react"
import { motion } from 'framer-motion';
import '../../styles/projects.scss';
import { A } from '.';

export default ({ name, slug, github, description, preview, id }) => {
	return (
		<li key={id} className="project">
			<A href={github}>
				<div className="row">
					<span className="project-order">{id < 9 ? 0 : null}{id}</span>
					<h1 className="project-name">{name}</h1>
					<p className="project-slug">{slug}</p>
				</div>
			</A>
		</li>
	)
}