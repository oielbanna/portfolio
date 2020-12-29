import React from 'react';
import { useViewportScroll } from 'framer-motion';
import '../../styles/header.scss';
import SocialLinks from './SocialLinks';


function Header() {
  const { scrollYProgress } = useViewportScroll();
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

export default Header;
