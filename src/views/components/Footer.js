import React from "react";
import { motion, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { A } from './a';
import SocialLinks from './SocialLinks';

export const Footer = () => {
	const { scrollYProgress } = useViewportScroll();
	const [show, setShow] = React.useState(true);

	React.useEffect(() => {
		return scrollYProgress.onChange(y => setShow(y > 0.98))
	}, [scrollYProgress])


	return (
		<Section>
			Let's be internet friends!
			<br />
			<A className="email" href="mailto:oielbanna@gmail.com">oielbanna@gmail.com</A>

			<SocialLinks isShown={show} isColumn={true} />

			<A target="_blank" href="https://github.com/oielbanna/portfolio"><Signature>Designed &amp; built by Omar Ibrahim</Signature></A>
		</Section>);
}

const Section = styled(motion.footer)`
	background-color: var(--accent-dark-color);
	font-size: 1.3rem;

	.email {
		font-weight: 900;
		font-style: italic;
		font-size: 2rem;
		margin-bottom: 20px;
	}

	${breakpoint('desktop')`
		padding: 80px 14rem 40px;
	`}
	
	${breakpoint('mobile')`
		padding: 35px 24px 73px 24px;
	`}
`

const Signature = styled.span`
	position: absolute;
	bottom: 12px;
	left: 0;
	width: 100%;
	text-align: center;
	font-size: 0.9rem;
	font-weight: 100;
	padding: 2px 4px;
`