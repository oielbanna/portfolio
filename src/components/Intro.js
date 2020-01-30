import React from 'react';
import '../styles/intro.scss';
import { useTranslation } from 'react-i18next'
import { motion, useViewportScroll, useTransform } from "framer-motion"

export const Intro = (props) => {
    const { t } = useTranslation()
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div className="intro">
            <motion.div className="intro-container intro__left" >
                <p>
                    {t('intro')}
                </p>
            </motion.div>
            <div className="intro-container intro__right">
                <div className="intro__right-container">
                    <h3>{t('hello')}</h3>
                    <motion.h1 animate={{ opacity: 0.5 }}
                        transition={{ duration: 2 }}>
                        Omar <br />  Ibrahim <span />
                    </motion.h1>
                </div>
            </div>

        </div>
    );
}
