import React, { useState, useRef, useLayoutEffect } from 'react';
import '../../styles/nav.scss';
import A from "./a";
import { useTranslation } from 'react-i18next'
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"

export const Navigation = () => {
    const [isHovered, setHovered] = useState(false)
    const [isClicked, setClicked] = useState(true)

    const menuClicked = () => {
        setClicked(!isClicked)

    }

    return (
        <nav>
            <A>
                <motion.div className="nav__menu"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onTapStart={menuClicked}
                    animate={{translateX: isClicked? "20px": "0px", top: isClicked?"50%":""}}
                    transition={{ duration: 0.3, delay: 0.1}}
                >
                    <i className="icon-menu" >
                        <motion.span className="line" animate={{ width: isClicked ? "20px" : "20px", rotate: isClicked ? "-45deg" : "0deg" }}></motion.span>
                        <motion.span className="line" animate={{ opacity: isClicked ? 0 : 1 }}></motion.span>
                        <motion.span className="line" animate={{ width: isClicked ? "20px" : "16px", rotate: isClicked ? "45deg" : "0deg", translateY: isClicked ? "-13px" : "0px" }}></motion.span>
                    </i>
                    {/* <motion.span className="icon-menu__txt" animate={{ visibility: isClicked ? "hidden" : "visible" }}><span>U</span><span>N</span><span>E</span><span>M</span></motion.span> */}
                </motion.div>
            </A>

            <motion.div className="nav-container" initial={false} animate={{ translateX: isClicked? "100%": isHovered ? "11%" : "0%" }} transition={{ duration: 0.1, type: "spring", stiffness: 20 }}>
                SOME STUFF
            </motion.div>
        </nav>
    );
}
