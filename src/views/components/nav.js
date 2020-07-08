import React, { useState, useRef, useLayoutEffect } from 'react';
import '../../styles/nav.scss';
import A from "./a";
import { useTranslation } from 'react-i18next'
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"
import LanguageSelector from "./LanguageSelector";
// import Pattern from "./nav-art";

export function Links(props){
    const data = [{
        id: "linkedin",
        label: "LN",
        link: "https://www.linkedin.com/in/oielbanna"
    },{
        id: "github",
        label: "GT",
        link: "https://github.com/oielbanna"
    },{
        id: "twitter",
        label: "TW",
        link: "https://twitter.com/notelbanna"
    }]

    return (
        <ul {...props}>
            {data.map(d => {
                return <li><A href={d.link} key={d.id} target="_blank">{d.label}</A></li>
            })}
        </ul>
    )
}

export const Navigation = () => {
    const [isHovered, setHovered] = useState(false)
    const [isClicked, setClicked] = useState(true)
    const { t, _ } = useTranslation();
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
                    animate={{ translateX: isClicked ? "20px" : "0px", top: isClicked ? "50%" : "" }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <i className="icon-menu" >
                        <motion.span className="line" animate={{ width: isClicked ? "20px" : "20px", rotate: isClicked ? "-45deg" : "0deg" }}></motion.span>
                        <motion.span className="line" animate={{ opacity: isClicked ? 0 : 1 }}></motion.span>
                        <motion.span className="line" animate={{ width: isClicked ? "20px" : "16px", rotate: isClicked ? "45deg" : "0deg", translateY: isClicked ? "-13px" : "0px" }}></motion.span>
                    </i>
                    {/* <motion.span className="icon-menu__txt" animate={{ visibility: isClicked ? "hidden" : "visible" }}><span>U</span><span>N</span><span>E</span><span>M</span></motion.span> */}
                </motion.div>
            </A>

            <motion.div className="nav-container" initial={false} animate={{ translateX: isClicked ? "100%" : isHovered ? "5%" : "0%" }} transition={{ duration: 0.1, type: "spring", stiffness: 20 }}>
                <div className="nav-container-left" >

                    <div className="text">
                        <h1 dangerouslySetInnerHTML={{ __html: t("nav-lost?") }} />
                        <div className="border" />
                        <ul className="menu">
                            <li>
                                <A href="#">
                                    {t('home')}
                                </A>
                            </li>
                            <li>
                                <A href="#about">
                                    {t('about')}
                                </A>
                            </li>
                            <li>
                                <A href="#experience">
                                    {t('experience')}
                                </A>
                            </li>
                            <li>
                                <A href="#projects">
                                    {t('projects')}
                                </A>
                            </li>
                            <li>
                                <A href="#contact">
                                    {t('contact')}
                                </A>
                            </li>
                        </ul>
                    </div>

                    <div className="contact">

                        <span class='the-arrow -right'>
                            <span class='shaft'></span>
                        </span>
                        <div>
                            <h4 style={{ margin: "2px" }}>Want to have a chat?</h4>
                            <A className="mustard-text" href="mailto:oielbanna@email.com">oielbanna@gmail.com</A>
                        </div>

                       
                        <Links className="links"/>

                    </div>
                </div>
                <div className="graphic_area" >
                    <LanguageSelector />
                    <img src={require("../../assets/nav-art.png")} height="600" />
                </div>
            </motion.div>
        </nav>
    );
}
