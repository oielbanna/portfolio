import React from "react";
import { motion, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { A } from '.';
import SocialLinks from './SocialLinks';

const Footer = () => {
	const { scrollYProgress } = useViewportScroll();
	const [show, setShow] = React.useState(true);

	React.useEffect(() => {
		return scrollYProgress.onChange(y => setShow(y > 0.98))
	}, [scrollYProgress])


	return (
		<Section>
			Let's be internet friends!
			<br />
			<A href="mailto:oielbanna@gmail.com">oielbanna@gmail.com</A>

			<SocialLinks isShown={show} isColumn={true} />
		</Section>);
}

export default Footer;

const Section = styled(motion.footer)`
	background-color: var(--accent-dark-color);
	font-size: 1.3rem;

	a {
		font-weight: 900;
		font-style: italic;
		font-size: 2rem;
		margin-bottom: 20px;
	}

	${breakpoint('desktop')`
		padding: 80px 14rem 110px;
	`}
	
	${breakpoint('mobile')`
		padding: 35px;
		padding-left: 24px;
  `}
`