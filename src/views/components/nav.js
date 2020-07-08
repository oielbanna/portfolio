import React, { useState, useRef, useLayoutEffect } from 'react';
import '../../styles/nav.scss';
import A from "./a";
import { useTranslation } from 'react-i18next'
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"
import LanguageSelector from "./LanguageSelector";
// import Pattern from "./nav-art";

export function MenuLinks({ isClicked, className }) {
    const { t } = useTranslation();
    const data = [{
        id: "home",
        link: "#"
    }, {
        id: "about",
        link: "#about"
    }, {
        id: "experience",
        link: "#experience"
    }, {
        id: "projects",
        link: "#projects"
    }, {
        id: "contact",
        link: "#contact"
    }];

    const ul_variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const li_variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };
    return (
        <motion.ul
            animate={isClicked ? "open" : "closed"}
            variants={ul_variants}
            transition={{ delay: 10 }}
            className={className}>

            {data.map((d, i) => {
                return <motion.li key={d.id} transition={{ delay: i * 10 }} variants={li_variants}><A href={d.link}>{t(d.id)}</A></motion.li>
            })}
        </motion.ul>
    )
}

export function SocialLinks(props) {
    const data = [{
        id: "linkedin",
        label: "LN",
        link: "https://www.linkedin.com/in/oielbanna"
    }, {
        id: "github",
        label: "GT",
        link: "https://github.com/oielbanna"
    }, {
        id: "twitter",
        label: "TW",
        link: "https://twitter.com/notelbanna"
    }]

    return (
        <ul {...props}>
            {data.map(d => {
                return <li key={d.id}><A href={d.link} target="_blank">{d.label}</A></li>
            })}
        </ul>
    )
}

export function MenuIcon({ isClicked, onClickChange }) {
    const { scrollY } = useViewportScroll();
    const yRange = useTransform(scrollY, [25, 50], ["15%", "50%"]);
    const top = useSpring(yRange, { stiffness: 100, damping: 20 });

    const springConfig = {
        damping: 50,
        stiffness: 100,
        mass: 4
    };
    // const y = useSpring(useTransform(scrollY, [offsetTop, offsetTop + 100], ["0%", "50%"]), springConfig);

    return (
        <A>
            <motion.div className="nav__menu"
                onTapStart={() => onClickChange(!isClicked)}
                animate={{ translateX: isClicked ? "20px" : "0px", top: isClicked? "15%": "50%"}}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{top}}
            >

                <i className="icon-menu" >
                    <motion.span className="line" animate={{ width: isClicked ? "20px" : "20px", rotate: isClicked ? "-45deg" : "0deg" }}></motion.span>
                    <motion.span className="line" animate={{ opacity: isClicked ? 0 : 1 }}></motion.span>
                    <motion.span className="line" animate={{ width: isClicked ? "20px" : "16px", rotate: isClicked ? "45deg" : "0deg", translateY: isClicked ? "-13px" : "0px" }}></motion.span>
                </i>
                {/* <motion.span className="icon-menu__txt" animate={{ visibility: isClicked ? "hidden" : "visible" }}><span>U</span><span>N</span><span>E</span><span>M</span></motion.span> */}

            </motion.div>
        </A>
    )
}

export const Navigation = () => {
    const [isHovered, setHovered] = useState(false)
    const [isClicked, setClicked] = useState(false)
    const { t } = useTranslation();

    return (
        <nav>
            {/* im really sorry about passing the click state like that.*/}
            <MenuIcon isClicked={isClicked} onClickChange={setClicked} />


            <motion.div className="nav-container" initial={false} animate={{ translateX: isClicked ? "100%" : "0%" }} transition={{ duration: 0.1, type: "spring", stiffness: 20 }}>
                <div className="nav-container-left" >

                    <div className="text">
                        <h1 dangerouslySetInnerHTML={{ __html: t("nav-lost?") }} />
                        <div className="border" />

                        <MenuLinks className="menu" isClicked={isClicked} />
                    </div>

                    <div className="contact">

                        <span className='the-arrow -right'>
                            <span className='shaft'></span>
                        </span>
                        <div>
                            <h4 style={{ margin: "2px" }}>Want to have a chat?</h4>
                            <A className="mustard-text" href="mailto:oielbanna@email.com">oielbanna@gmail.com</A>
                        </div>
                        <SocialLinks className="links" />

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
