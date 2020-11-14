import React, { useState, useRef } from 'react';
import '../../styles/nav.scss';
import A from "./a";
import { useTranslation } from 'react-i18next'
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"
import LanguageSelector from "./LanguageSelector";

export function MenuLinks({ isClicked, className, onClickChange }) {
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
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
            delay: 2
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
                return <motion.li key={d.id} onClick={() => onClickChange(false)} transition={{ delay: i * 10 }} variants={li_variants}><A href={d.link}>{t(d.id)}</A></motion.li>
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
    const initial = !isClicked ? "17%" : "49%";
    const final = "50%";
    const { scrollY } = useViewportScroll();
    const yRange = useTransform(scrollY, [20, 40], [initial, final]);
    const top = useSpring(yRange, { stiffness: 200, damping: 50 });

    const theIcon = useRef();
    return (
        <A>
            <motion.div className="nav__menu"
                onTapStart={() => onClickChange(!isClicked)}
                animate={{ translateX: 0, opacity: 1 }}
                style={{ top }}
                ref={theIcon}
                initial={{ opacity: 0, translateX: -50 }}
                transition={{ ease: "easeInOut", duration: 0.4, delay: 1.7 }}
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
    const [isClicked, setClicked] = useState(false)
    const { t } = useTranslation();

    const container_variant = {
        open: {
            visibility: "visible"
        },
        closed: {
            visibility: "hidden"
        }
    };
    return (
        <nav>
            {/* im really sorry about passing the click state like that.*/}
            <MenuIcon isClicked={isClicked} onClickChange={setClicked} />

            <motion.div className="nav-container" variants={container_variant} animate={isClicked ? "open" : "closed"}
                transition={{ duration: 0.1, type: "spring", stiffness: 20 }}>
                <div className="nav-container-left" >

                    <div className="text">
                        <h1 dangerouslySetInnerHTML={{ __html: t("nav-lost?") }} />
                        <div className="border" />

                        <MenuLinks className="menu" isClicked={isClicked} onClickChange={setClicked} />
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
                    <img src={require("../../assets/nav-art.png")} height="600" alt={"polka dots on white background"} />
                </div>
            </motion.div>
        </nav>
    );
}
