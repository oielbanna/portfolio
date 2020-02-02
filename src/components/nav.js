import React, { useState, useRef, useLayoutEffect } from 'react';
import '../styles/nav.scss';
import A from "./a";
import { useTranslation } from 'react-i18next'
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"

export const Navigation = (props) => {
    const [isHovered, setHovered] = useState(false)

    return (
        <nav>
            <A>
                <motion.div className="nav__menu" 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <i className="icon-menu">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </i>
                    <span className="icon-menu__txt"><span>U</span><span>N</span><span>E</span><span>M</span></span>
                </motion.div>
            </A>

            <motion.div className="nav-container" initial={false} animate={{ translateX: isHovered ? "80px" : "0px" }} transition={{ duration: 0.3 }}>
                SOME STUFF
            </motion.div>
        </nav>
    );
}
