import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from 'react-i18next'
import "../styles/intro.scss";
import Character from "./components/Character";

function Intro() {
    const { t } = useTranslation();
    const [hasScrolled, setHasScrolled] = useState(false);
    const { scrollY } = useScroll();
    scrollY.onChange(value => {
        if (value > 100) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    });

    return (
        <section style={{ padding: 0 }}>
            <Character />
            <motion.div className="intro" transition={{ ease: "easeInOut", duration: 0.2 }} animate={{ color: hasScrolled ? "#f4f4f4" : "#1c1b20" }}>
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
            </motion.div>
        </section>
    );
}

export default Intro