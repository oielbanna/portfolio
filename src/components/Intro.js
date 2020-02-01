import React from 'react';
import '../styles/intro.scss';
import { useTranslation } from 'react-i18next'
import { motion, useViewportScroll, useTransform } from "framer-motion"

export const Intro = (props) => {
    const { t } = useTranslation()
    const { scrollY } = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <motion.div className="intro" style={{translateX: scrollY}}>
            <motion.div className="intro-container intro__left">
                <p>
                    {t('intro')}
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
