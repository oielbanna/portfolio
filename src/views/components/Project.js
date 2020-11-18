import React from "react"
import { motion } from 'framer-motion';
import { A } from '.';

export default ({ name, slug, github, description, preview, id }) => {
	return (
		<li key={id}>
			<A href={github}>
				<div>
					<span>{id}</span>
					<h1>{name}</h1>
					<p>{slug}</p>
				</div>
			</A>
		</li>
	)
}