import React from 'react';
import { useScroll } from 'framer-motion';
import '../../styles/header.scss';
import SocialLinks from './SocialLinks';


export const Header = () => {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    return scrollYProgress.onChange(y => setShow(y < 0.98))
  }, [scrollYProgress])

  return (
    <header className="header">
      <SocialLinks isShown={show}/>
    </header>
  );
}
