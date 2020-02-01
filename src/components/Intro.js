import React, {useState, useRef, useLayoutEffect} from 'react';
import '../styles/intro.scss';
import { useTranslation } from 'react-i18next'
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion"

export const Intro = (props) => {
    const { t } = useTranslation();
    const refIntro = useRef();
    const [offsetTop, setOffsetTop] = useState(0);

    useLayoutEffect(() => {
        if (!refIntro.current) return null;
        setOffsetTop(refIntro.current.offsetTop);
    }, [refIntro]);

    const springConfig = {
        damping: 50,
        stiffness: 100,
        mass: 4
      };
    const { scrollY } = useViewportScroll();
    const y = useSpring(useTransform(scrollY, [offsetTop, offsetTop + 50] , ["0%", "20%"]), springConfig);

    return (
        <motion.div ref={refIntro} className="intro" style={{ translateX: y }}>
            <motion.div className="intro-container intro__left">
                <p >
                    {t('intro')}
                </p>
                <p style={{ color: "white", fontSize: "1.5em" }}>
                    {t('intro-sub')}
                </p>
            </motion.div>
            <div className="intro-container intro__right">
                <motion.div className="intro__right-container">
                    <h3>{t('hello')}</h3>
                    <h1>
                        Omar <br />  Ibrahim <span />
                    </h1>
                </motion.div>
            </div>

        </motion.div>
    );
}
