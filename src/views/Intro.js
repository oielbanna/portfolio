import React, { useRef, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { useTranslation } from 'react-i18next'
import "../styles/intro.scss";
import { STARS_COORDS } from "../constants";
function Intro() {
    const { t } = useTranslation();

    return (
        <section style={{ padding: 0 }}>
            <Character />
            <div className="intro">
                <motion.div className="intro__left" initial={{ opacity: 0, translateX: -20 }} animate={{ opacity: 1, translateX: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                >
                    <h3 id="hello">{t('hello')}</h3>
                    <h1>
                        Omar <br />  Ibrahim <span />
                    </h1>
                </motion.div>

                <motion.div className="intro__right" initial={{ opacity: 0, translateX: 20 }} animate={{ opacity: 1, translateX: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
                    <h1 dangerouslySetInnerHTML={{ __html: t("intro") }} />

                </motion.div>
            </div>
        </section>
    );
}

const Character = (props) => {
    const starsG = useRef();
    const [hasScrolled, setHasScrolled] = useState(false);
    const { scrollY } = useViewportScroll();
    const outputRange = [
        `
      M 0 0 v 64 c 86 27 107 102 171 160 s 148 62 223 93 c 130 54 183 216 330 216 s 202 -162 332 -216 c 75 -31 159 -35 223 -93 s 85 -134 171 -160 V 0 H 0 z
      `,
        `
      M 0 0 v 792 c 63 1 133 -1 189 0 s 104 4 215 6 c 124 -1 215 4 322 6 s 183 2 325 -1 c 111 2 173 -2 233 -3 s 96 1 233 5 V 0 H 0 z
      `
    ];
    const clip_path_variants = {
        open: {
            d: outputRange[0]
        },
        closed: {
            d: outputRange[1]
        }
    };
    const stars_variants = {
        open: {
            y: 0,
            visibility: "visible"
        },
        closed: {
            y: 20,
            visibility: "hidden"
        }
    }
    scrollY.onChange(value => {
        if (value > 100) {
            setHasScrolled(true);
            // const stars = starsG.current.children;
            // for (let star of stars) {
            //     star.classList.add("stars_exit")
            // }
        } else {
            setHasScrolled(false);
            // const stars = starsG.current.children;
            // for (let star of stars) {
            //     star.classList.remove("stars_exit")
            // }
        }
    });
    // React.useLayoutEffect(() => {
    //     // blinking stars
    //     const stars = starsG.current.children;
    //     let i = 0;
    //     for (let star of stars) {
    //         i++;
    //         if (i % 50 === 0) continue;
    //         star.classList.add("stars_hov")
    //         star.style["animation-delay"] = Math.random() * 10 + "s"
    //         star.style["animation-duration"] = (Math.random() * 2 + 4) + "s";

    //     }
    // }, []);
    return (
        <svg
            id="home__svg"
            style={{ left: 0, top: "-10px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1450 788"
        >
            <defs>
                <motion.path
                    className="stars_clip"
                    id="a"
                    d="M 0 0 
                        v 64
                        c 86 27 107 102 171 160
                        s 148 62 223 93
                        c 130 54 183 216 330 216
                        s 202 -162 332 -216 
                        c 75 -31 159 -35 223 -93
                        s 85 -134 171 -160
                        V 0
                        H 0
                        z"
                    variants={clip_path_variants}
                    animate={hasScrolled ? "closed" : "open"}
                    transition={{
                        ease: "easeInOut", duration: 0.5
                    }}
                />
            </defs>
            <use fill="#1c2e4a" overflow="visible" href="#a" />
            <clipPath id="b">
                <use overflow="visible" href="#a" />
            </clipPath>
            <g ref={starsG} clipPath="url(#b)">
                <Stars />
            </g>
            <motion.g id="character" initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: hasScrolled ? 0 : 1, translateY: hasScrolled ? 20 : 0 }} transition={{ ease: "easeInOut", duration: 0.4 }} >

                <g fill="#efbda8" id="arms">
                    <path d="M687 704c0-4-30-16-37-14-1-3 11-37 4-50 15-12 12-71 12-71-15 0-35 9-31 67 0 0-14 23-4 66 0 1 41 20 52 18 10-2 4-12 4-16zM776 704c0-4 30-16 37-14 1-3-11-37-4-50-15-12-12-71-12-71 15 0 35 9 31 67 0 0 14 23 4 66 0 1-44 20-52 18-7-2-4-12-4-16z" />
                </g>
                <path
                    id="shirt"
                    fill="#eaeaea"
                    d="M828 591s-5-13-14-19c-4-3-15-2-19-3-5-2-11-3-16-6l-19-9s-5-2-27-2h-2-1c-22 0-27 2-27 2l-18 9-17 6c-4 1-15 0-19 3-9 6-14 19-14 19s-2 6-3 29c1 7 28 15 28 15 4-5 3-11 4-13l3 13c2 7 12 20 14 27 2 8 1 15 4 22 3 8 3 16 5 24v22l40 3h3l40-3a806 806 0 010-22c2-8 2-16 5-24l4-22c2-7 12-20 14-27l3-13c0 2 0 8 4 13 0 0 27-8 27-15 0-23-2-29-2-29z"
                />
                <path
                    fill="#13233a"
                    d="M729 725c-13 0-40 10-89-5-34-13-55-7-60 9-6 22 1 67 147 43l2 1v-48zM729 725c13 0 40 9 89-6 34-13 55-6 60 10 6 22-1 67-147 43l-2 1v-48z"
                />
                <path
                    fill="#ffbe13"
                    d="M646 777l15 3c22 2 50 0 50 0l-7-42-37-9-19-2c-15 0-24 43-2 50z"
                />
                <path fill="#919191" d="M702 748l-33-5c1 1-2 22-2 22l34 1 1-18z" />
                <path
                    fill="#fff"
                    d="M646 777l15 3c6-6 10-15 11-26 1-9-1-18-5-25l-19-2c-15 0-24 43-2 50z"
                />
                <path
                    fill="#d1d1d1"
                    d="M646 777l8 2-1-1c-22-6-13-49 2-50l12 1-19-2c-15 0-24 43-2 50zM670 770l2-2c3-5 4-13 4-19 1 5 2 12 0 18 0 1 0 2 2 2 1 1 2 0 2-1 4-11-1-27-6-29h-2l-1 2c0 1 2 16-2 25v3l1 1z"
                />
                <path
                    fill="#d1d1d1"
                    d="M686 770l3-1c3-11-1-27-7-29l-2 1c-1 1 0 2 1 3 2 1 7 13 4 24-1 1 0 2 1 2z"
                />
                <path
                    fill="#d1d1d1"
                    d="M695 771l2-1c4-11-1-27-6-29-1-1-3 0-3 1l1 3c3 1 8 13 4 23 0 1 0 3 2 3z"
                />
                <g>
                    <path
                        fill="#fff"
                        d="M670 769h1c6-1 13-16 12-27 0-2-1-2-3-2-1 0-2 1-1 2 1 11-6 22-9 23-1 0-2 1-1 2l1 2z"
                    />
                    <path
                        fill="#fff"
                        d="M679 770h1c5-2 13-16 11-28l-2-2-2 3c1 10-6 22-8 22l-2 3 2 2z"
                    />
                    <path
                        fill="#fff"
                        d="M687 770h1c6-1 13-16 12-27 0-1-1-2-3-2-1 0-2 1-1 3 1 10-6 22-9 22-1 0-2 1-1 3l1 1z"
                    />
                </g>
                <path
                    fill="#1c2e4a"
                    d="M847 719c-11 1-53 16-67 19-21 7-43 11-76-1 3 5 1 31 2 35l76 3c25 2 25 8 58 5 34-2 43-28 38-50-2-8-9-14-31-11z"
                />
                <g>
                    <path fill="#ba874f" d="M773 560l-2 111h-10l4-115 8 4z" />
                    <defs>
                        <path id="c" d="M773 560l-2 111h-10l4-115 8 4z" />
                    </defs>
                    <clipPath id="d">
                        <use overflow="visible" href="#c" />
                    </clipPath>
                    <path
                        fill="#ba874f"
                        d="M773 560l-2 111h-10l4-115 8 4z"
                        clipPath="url(#d)"
                    />
                    <g fill="#c99e75" clipPath="url(#d)">
                        <path d="M774 564l-3-2-2 2-2-2-2 2v1l2-2 2 2 2-2 2 2zM774 561l-3-2-2 1-2-1-2 2v1l2-2 2 2 2-2 2 2zM774 558l-3-2-2 2-2-2-2 2v1l2-2 2 2 2-2 2 2zM773 571l-2-3-2 2-2-2-2 2v1l2-2 2 2 2-1 2 1zM774 568l-3-3-2 2-2-2-2 2v1l2-2 2 2 2-2 2 2zM773 577l-2-2-2 1-2-1-3 2 1 1 2-2 2 2 2-2 2 2zM773 574l-2-3-2 2-2-2-3 3h1l2-1 2 1 2-1 2 1zM773 584l-2-3-2 2-2-2-3 2 1 1 2-2 2 2 2-2 2 2zM773 580l-2-2-2 2-2-2-3 2 1 1 2-2 2 2 2-2 2 2zM773 590l-3-2-2 1-2-2-2 3v1l2-2 2 2 2-2 2 2zM773 587l-3-3-2 2-2-2-2 3 2-2 2 2 2-1 2 1zM773 597l-3-3-2 2-2-2-2 2v1l2-2 2 2 2-2 2 2zM773 593l-3-2-2 1-1-1-3 2 2-1 2 2 2-2 2 2zM773 603l-3-3-2 2-2-2-3 3h1l2-2 2 2 2-1 2 1zM773 600l-3-3-2 2-2-2-3 2 1 1 2-2 2 2 2-2 2 2zM772 609l-2-2-2 1-2-1-3 2h1l2-1 2 2 2-2 2 2zM773 606l-3-3-2 2-2-2-3 3h1l2-2 2 2 2-1 2 2zM772 616l-3-3-2 2-1-2-3 3h1l2-2 1 2 2-2 2 2zM772 612l-3-2-1 2-2-2-3 2 1 1 2-2 2 2 1-2 2 2zM772 622l-2-2-2 1-2-2-3 3 3-1 1 2 3-2 1 2z" />
                        <path d="M772 619l-2-3-3 2-1-2-3 3h1l2-2 1 2 2-1 2 2zM772 628l-3-2-2 2-2-2-3 2 1 1 2-2 2 2 2-2 2 2zM772 625l-3-2-2 2-2-2-3 2 1 1 2-2 2 2 2-2 2 2zM772 635l-3-3-2 2-2-2-3 2 1 1 2-2 2 2 2-1 2 2zM772 632l-3-3-2 2-2-2-3 2 1 1 2-2 2 2 2-2 2 2zM772 641l-3-2-2 2-2-2-2 2v1l2-2 2 2 2-2 2 2zM772 638l-3-2-2 1-2-1-2 2v1l2-2 2 2 2-2 2 2zM772 648l-3-2-2 1-2-2-3 2 1 1 2-2 2 2 2-1 2 2zM772 645l-3-3-2 2-2-2-3 2 1 1 2-2 2 2 2-2 2 2z" />
                    </g>
                    <path fill="#5e3519" d="M773 586h-9v-2h9z" />
                    <g>
                        <path fill="#ba874f" d="M690 560l3 111h9l-4-115-8 4z" />
                        <defs>
                            <path id="e" d="M690 560l3 111h9l-4-115-8 4z" />
                        </defs>
                        <clipPath id="f">
                            <use overflow="visible" href="#e" />
                        </clipPath>
                        <path
                            fill="#ba874f"
                            d="M690 560l2 111h10l-4-115-8 4z"
                            clipPath="url(#f)"
                        />
                        <g fill="#c99e75" clipPath="url(#f)">
                            <path d="M690 564l2-2 2 2 2-2 3 2-1 1-2-2-2 2-2-2-2 2zM690 561l2-2 2 1 2-1 3 2-1 1-2-2-2 2-2-2-2 2zM690 558l2-2 2 2 2-2 3 2-1 1-2-2-2 2-2-2-2 2zM690 571l2-3 2 2 2-2 3 2-1 1-2-2-2 2-2-1-1 1zM690 568l2-3 2 2 2-2 3 2-1 1-2-2-2 2-2-2-2 2zM690 577l3-2 2 1 1-1 3 2-1 1-2-2-1 2-2-2-2 2zM690 574l3-3 2 2 1-2 3 3h-1l-2-1-1 1-2-1-2 1zM690 584l3-3 2 2 1-2 3 2v1l-2-2-2 2-2-2-2 2zM690 580l2-2 2 2 2-2 3 2-1 1-2-2-1 2-3-2-1 2zM690 590l3-2 2 1 2-2 3 3-1 1-2-2-2 2-2-2-2 2zM690 587l3-3 2 2 2-2 3 3h-1l-2-2-2 2-2-1-2 1zM691 597l2-3 2 2 2-2 3 2-1 1-2-2-2 2-2-2-2 2zM691 593l2-2 2 1 2-1 3 2h-1l-2-1-2 2-2-2-2 2zM691 603l2-3 2 2 2-2 3 3-3-2-2 2-2-1-2 1zM691 600l2-3 2 2 2-2 3 2-1 1-2-2-2 2-2-2-2 2zM691 609l3-2 2 1 2-1 2 2-2-1-2 2-2-2-2 2zM691 606l2-3 2 2 2-2 3 3-3-2-1 2-3-1-1 2zM691 616l3-3 2 2 2-2 2 3-2-2-2 2-2-2-2 2zM691 612l3-2 2 2 2-2 2 2v1l-2-2-2 2-2-2-2 2zM691 622l3-2 2 1 2-2 3 3h-1l-2-1-2 2-2-2-2 2z" />
                            <path d="M691 619l3-3 2 2 2-2 2 3-2-2-2 2-2-1-2 2zM691 628l3-2 2 2 2-2 3 2-1 1-2-2-2 2-2-2-2 2zM691 625l3-2 2 2 2-2 3 2-1 1-2-2-2 2-2-2-2 2zM691 635l3-3 2 2 2-2 3 2-1 1-2-2-2 2-2-1-2 2zM691 632l3-3 2 2 2-2 3 2-1 1-2-2-2 2-2-2-2 2zM691 641l3-2 2 2 2-2 3 2-1 1-2-2-2 2-2-2-2 2zM691 638l3-2 2 1 2-1 3 2-1 1-2-2-2 2-2-2-2 2zM692 648l2-2 2 1 2-2 3 2-1 1-2-2-2 2-2-1-2 2zM692 645l2-3 2 2 2-2 3 2v1l-3-2-2 2-2-2-2 2z" />
                        </g>
                        <path fill="#5e3519" d="M690 586h9v-2h-9z" />
                    </g>
                </g>
                <g>
                    <path
                        fill="#989898"
                        d="M790 745c-6 5-114 6-121 0-6-5-14-91-10-96 4-4 136-3 142 0 6 4-5 91-11 96z"
                    />
                    <g fill="#fff">
                        <path d="M748 698c0 11-8 17-18 17s-18-5-18-17c0-13 8-18 18-18s18 6 18 18zM728 677s-7-11-11-4c-2 4 11 4 11 4zM732 677s6-11 10-4c2 4-10 4-10 4z" />
                    </g>
                    <path
                        fill="#c9c9c9"
                        d="M795 727c-1 9-3 16-5 17-6 5-114 5-121 0-6-6-14-92-10-96 1-1 7 56 24 71 31 27 91 20 112 8z"
                        opacity=".2"
                    />
                </g>
                <g>
                    <path
                        fill="#eaeaea"
                        d="M802 776l-15 4c-21 4-50 5-50 5l3-43 36-11 19-5c15 0 28 42 7 50z"
                    />
                    <path
                        fill="#919191"
                        d="M743 753l32-8c-1 1 4 21 4 21l-34 5c1-1-2-18-2-18z"
                    />
                    <path
                        fill="#fff"
                        d="M802 776l-15 4c-6-5-11-14-13-24s-1-19 2-25l19-5c15 0 28 42 7 50z"
                    />
                    <path
                        fill="#d1d1d1"
                        d="M802 776a52 52 0 01-7 2c21-8 8-50-7-50l-12 3c7-2 14-5 19-5 15 0 28 42 7 50zM777 771l-3-1c-3-5-4-13-5-19-1 5-1 12 1 18 1 1 0 2-1 3-1 0-2 0-3-2-4-10-1-26 4-29h2c1 1 2 1 1 2 0 0-1 16 5 25l-1 3z"
                    />
                    <path
                        fill="#d1d1d1"
                        d="M761 773c-1 1-2 0-3-1-4-10-1-27 4-29 1-1 2 0 3 1l-1 2c-2 1-6 15-2 24 1 1 0 3-1 3z"
                    />
                    <path
                        fill="#d1d1d1"
                        d="M752 775l-2-1c-5-11-2-27 4-30l2 1c1 1 1 2-1 3s-6 14-1 24c0 1 0 2-2 3z"
                    />
                    <g>
                        <path
                            fill="#fff"
                            d="M777 770h-1c-6 0-15-14-14-26l2-2c1 0 2 1 2 3-1 10 8 21 10 21 1 0 2 1 2 3l-1 1z"
                        />
                        <path
                            fill="#fff"
                            d="M768 772h-1c-6-1-14-15-14-26l2-2c2 0 3 1 2 2 0 11 8 22 11 22l2 2-2 2z"
                        />
                        <path
                            fill="#fff"
                            d="M760 773h-1c-6 0-15-14-14-26l2-2c1 0 2 1 2 3 0 10 8 21 10 21 1 0 2 1 2 3l-1 1z"
                        />
                    </g>
                    <path
                        fill="#1c2e4a"
                        d="M613 725c11 0 56 16 70 19 23 7 25 7 59-4-3 5-3 42-4 46-8 1-37-6-57-5-26 2-26 8-61 5-35-2-46-28-40-50 2-8 10-14 33-11z"
                    />
                </g>
                <path id="neck" fill="#ffb890" d="M750 538h-37c0 15-2 22 18 22s19-7 19-22z" />
                <g id="hair">
                    <path
                        fill="#231f20"
                        d="M728 481s-3-2-7 2-4 4-4 9c0 4 1 11 6 15 0 0-7 0-9-13 0 0-8 12 0 21 0 0-4 2-6-11 0 0-7 11 3 20 0 0-4-1-7-5 0 0 7 11 8 16l4 11c3 6 0 12-8 10 0 0 4-2 1-5-2-3-5-6-7-6-2-1-4 1-1 2 0 0-8 1-11-5s-2-14-2-14-3 5-2 9c0 0-2-5-2-11s10-12 9-23c0-10 4-31 20-38 16-6 26-4 35 2 9 5 14 13 16 27 2 13 6 19 9 27 3 7 4 19-4 22s-15 3-15 7c0 0-3 0-2-4 0 0-4 5-1 10 0 0-2 0-4-3 0 0-1 4 2 6 0 0-5-2-5-9s10-9 10-21h-3l5-7s-6 7-12 7c0 0 12-6 11-22 0 0-2 3-5 4 0 0 5-5 1-14s-12-18-17-16c-6 2-3 10-2 12 0 0-6-3-4-12z"
                    />
                    <path
                        fill="#161314"
                        d="M764 543l-1-5c0-2-2-4-4-6v-3l2-9 1-2 3-2c1-4 6-4 8-8l-2-7c-1 1-7-3-7-6l-3-5-1 1c-2 2-2 4-3 7-1 8-7 11-14 10-6 0-9-5-11-11v-3l-1-1c-3 0-3 0-4 3 0 4-2 8-6 10-6 5-16 2-19-6l-1-5v-1l-3 7c-1 3-4-1-4-5-1 0-1 4-4 2v4l4 14 3 2 1 2 2 6-1 1-1 4-1 2c-2 1-3 3-2 5v1l-5-5-2-6v-5c2-4 2-8 1-12l-3-12-2-4c-2-4-3-8-1-13 2-6 9-9 11-16 1-3 5-9 5-13 1-3-4-7-2-10l2-4 10-7h7l5-1c5-4 10-4 15-3s10 4 14 6l8 5c3 2 6 3 7 6l2 6c2 3-2 6 0 9l3 5c1 3 6 6 5 9-1 4 0 8 4 11h1c6 4 7 9 8 15v1c-3-3-5-7-9-7h-1l1 1c4 4 7 8 8 12l1 4c0 6-1 11-4 16l-1 1-1-1-2-5c-2-2-4-2-6 0l-2 6c-1 4-2 8-5 12l-3 3zm2-53v-2l-2-6c-1-3-2-6-5-8l-3-3c-3-2-7-5-7-10-1-4-4-7-7-10-4-3-14-3-17 1h-1l-5-2c-6-2-13 0-16 8l-3 21 1 8 2-2 4-2c4 0 9 1 13 4l6 3c4 1 8 0 11-2l11-5c4-1 7 0 9 3l1 1c1 2 2 2 3 1 2-1 3 0 4 1l1 1zm-54-1h-4c-2 0-5 1-5 4-1 3-1 9 3 12 2 2 5 2 8 2 7-1 11-5 11-12l-2-4c-4-2-7-2-11-2zm36-1l-8 2-3 1c-2 1-3 2-3 4 0 5 3 10 9 11 3 1 7 1 10-1 4-2 5-8 4-12l-4-4-5-1z"
                    />
                </g>
                <g id="face">
                    <path
                        fill="#ffb890"
                        d="M766 514h-2v-1l2-24v-2l2-2c1-2 3-3 6-1l1 2c3 8 1 27-9 28z"
                    />
                    <path
                        fill="#f29b62"
                        d="M770 498v-1l-2-6h1c2 2 4 7 3 11s-4 6-5 2c-1-3 1-8 3-6z"
                    />
                    <path
                        fill="#ffb890"
                        d="M699 514h1v-1l-3-23-1-2-2-2c-1-2-3-3-5 0l-1 2c-2 8 1 27 11 26z"
                    />
                    <path
                        fill="#f29b62"
                        d="M694 499v-1l1-5v-1c-3 2-4 7-3 12 1 3 5 5 6 1s-2-8-4-6z"
                    />
                    <path
                        fill="#ffc9ae"
                        d="M769 473c-7-25-37-26-37-26s-31 1-37 26c-2 5-1 19-1 19l1 11 10 25s4 10 13 15c6 3 14 3 14 3s8 0 13-3c9-5 13-15 13-15l10-25 2-11-1-19z"
                    />
                    <g fill="#684a35">
                        <path d="M725 483s0 3-2 4-14-2-17-2l-8 2s5-5 9-5l18 1zM738 484s0 2 3 3c2 1 13-2 17-2l7 2s-5-5-8-5l-19 2z" />
                    </g>

                    <g id="eyes">
                        <path id="eye-left" d="M716 495 c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" data-svg-origin="716px 495px"></path>
                        <path id="eye-right" d="M743 495c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" data-svg-origin="743px 495px"></path>
                        <path id="eye-right-2" d="M743 495 a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45" opacity="1" fill="none" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04" data-svg-origin="114.11000061035156 88" ></path>
                        <path id="eye-left-2" d="M716 495 a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87" fill="none" opacity="1" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04" data-svg-origin="89.8499984741211 87.43000030517578" ></path>
                    </g>
                    <g fill="#eab1a0">
                        <path d="M762 518l-7 15c-1 2-8-5-7-8l4-10c1-1 8 1 10 3zM701 518l7 15c1 2 8-5 8-8 0-2-3-9-5-10-1-1-8 1-10 3z" />
                    </g>
                    <path
                        id="nose"
                        fill="none"
                        stroke="#dd9976"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="3"
                        d="M732 514v-4 4z"
                    />
                </g>
                <g id="hat">
                    <path
                        fill="#c68742"
                        d="M795 471c-2 2-21 6-32 8l-32 3-34-4c-14-3-24-5-26-7-2-1 3-2 3-2h15c5-1 5-3 5-3v-6l2-18c0-7 2-14 3-18 4-10 26-4 31-5s23-8 27-6c3 3 6 9 8 16 3 10 6 23 6 33v2l4 1 10 1 7 1h1c4 1 4 2 2 4z"
                    />
                    <path
                        fill="#b5793c"
                        d="M779 471l-35 5c-10 2-19 1-34-1l-26-4c-1-2 5-2 5-2 5-1 5-3 5-3l1-6 5 1 25 2 35-5 11 4 1 2 3 1 10 1c9 2 0 4-6 5z"
                    />
                    <path d="M694 466s38 10 77-2l1-1-2-11v-1s-11 5-36 6c-19 0-39-3-40-2v11z" />
                    <path
                        fill="#b5793c"
                        d="M765 429c-6-15-11-14-18-12s-30 10-30 8c-1-2 6-2 5-3 0 0-17-1-21 2-3 3-5 17-5 18 0-7 1-14 3-18 4-10 26-4 31-5s23-8 26-5c4 2 7 8 9 15z"
                    />
                </g>
            </motion.g>
        </svg>

    )
}
// React.memo prevents re-renders which we dont want because it will move the stars locations.
const Stars = React.memo(() => {
    // teal, teal, yellow, orange, white
    const stars_color = ["#89bbc8", "#89bbc8",  "#edaf5b", "#dc633c", "#f1f4f4"]

    return (
        STARS_COORDS.map((item) => {
            return (<motion.path
                className="stars_hov"
                key={item[0]}
                // style={"animation-delay:" + Math.random() * 10 + "s; animation-duration: " + (Math.random() * 2 + 4) + "s"}
                style={{scale: Math.min(Math.random() + 0.5, 1)}}
                fill={stars_color[Math.round(Math.random() * (stars_color.length - 1))]}
                d={item}
            />);  
        })
    );
})


export default Intro