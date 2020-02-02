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
    const y = useSpring(useTransform(scrollY, [offsetTop, offsetTop + 20] , ["0%", "20%"]), springConfig);
    const n = useSpring(useTransform(scrollY, [offsetTop, offsetTop + 10] , ["-16%", "1%"]), springConfig);
    const o = useSpring(useTransform(scrollY, [offsetTop+50, offsetTop + 60] , [0, 1]), springConfig);

    return (
        <motion.div ref={refIntro} className="intro" style={{ translateX: y }}>
            <div className="intro-container intro__left"  >
                <motion.p style={{opacity : o}}>
                    {t('intro')}
                </motion.p>
                <motion.p style={{ color: "white", fontSize: "1.5em", opacity: o}}>
                    {t('intro-sub')}
                </motion.p>
            </div>
            <div className="intro-container intro__right">
                <motion.div className="intro__right-container" style={{translateX: n, translateY: "-50%"}}>
                    <h3>{t('hello')}</h3>
                    <h1>
                        Omar <br />  Ibrahim <span />
                    </h1>
                </motion.div>
            </div>

        </motion.div>
    );
}
