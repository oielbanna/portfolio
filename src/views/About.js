import React, { useState, useLayoutEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import "../styles/about.scss";
import { ABOUT, BIO_LENGTHS } from "../constants";

function BioLength({ bio, changeBio }) {
  const handleEnter = (item, $e) => {
    if ($e.key === 'Enter') {
      changeBio(item)
    }
  }

  return (
    <form id="bio-length-form">
      <fieldset className="fieldset">
        <legend className="legend">Adjust bio length:</legend>
        <ul className="container">
          {BIO_LENGTHS.map((item, i) => {
            return (
              <li tabIndex="0" key={i} onKeyDown={($e) => handleEnter(item, $e)}>
                <input id={'input' + (i + 1)} name="bio-length" type="radio" value={item} checked={bio === item} onChange={() => changeBio(item)} onKeyDown={($e) => handleEnter(item, $e)} />
                <label htmlFor={'input' + (i + 1)} >{item}</label>
              </li>
            );
          })}
        </ul>

      </fieldset>
    </form>
  );
}

const initialAnimate = {
  y: 20,
  opacity: 0,
};
const introAnimate = {
  y: 0,
  opacity: 1,
};

const defaultTransition = {
  ease: "easeInOut",
  duration: 0.5
};

const introVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  }
}
const About = () => {
  const greeting = useRef(null);
  const [customDuration, setCustomDuration] = useState(0.5);
  const [bio, changeBio] = useState(BIO_LENGTHS[Math.floor(BIO_LENGTHS.length / 2)]);

  const { scrollY } = useViewportScroll()
  const opacityRange = useTransform(scrollY, [15, 70], [1, 0]);
  const yRange = useTransform(scrollY, [15, 100], [0, 15]);
  const opacity = useSpring(opacityRange, { stiffness: 600, damping: 70 });
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });


  // this will change the bio section speed right after the app loads
  setTimeout(() => setCustomDuration(0.2), 1000);
  useLayoutEffect(() => {
    if (greeting.current && scrollY.get() > 70) {
      // reset animation if we load already past it
      greeting.current.style.opacity = 0;
    }
  }, [scrollY])
  return (
    <section id="about" className="about">
      <motion.div
        ref={greeting}
        variants={introVariants}
        initial="initial"
        animate="enter"
        transition={defaultTransition}
        style={{ position: "sticky", top: 75, opacity, y, marginBottom: 50 }}
      >
        <motion.h2
          id="hello"
        >
          <motion.span
            initial={initialAnimate}
            animate={introAnimate}
            transition={defaultTransition}
          >
            <span role="img" aria-label="Wave">👋</span> hi, I'm
          </motion.span>
        </motion.h2>
        <motion.h1
          id="name"
        >Omar Ibrahim</motion.h1>
      </motion.div>

      <div className="bio">
        <motion.div
          variants={introVariants}
          initial="initial"
          animate="enter"
          transition={{ ...defaultTransition, delay: 0.6 }}
        >
          <BioLength
            bio={bio}
            changeBio={changeBio}
          />
        </motion.div>
        <div className="bio_text-container">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={bio}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ ...defaultTransition, duration: customDuration }}
            >
              {ABOUT[bio]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default About;