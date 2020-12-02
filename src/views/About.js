import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/about.scss";
import { ABOUT, BIO_LENGTHS } from "../constants";

function BioLength({ bio, changeBio }) {
  return (
    <form id="bio-length-form">
      <fieldset className="fieldset">
        <legend className="legend">Adjust bio length:</legend>
        <ul className="container">
          {BIO_LENGTHS.map((item, i) => {
            return (
              <li key={i}>
                <input id={'input' + (i + 1)} name="bio-length" type="radio" value={item} checked={bio === item} onChange={() => changeBio(item)} />
                <label htmlFor={'input' + (i + 1)} >{i === 0 || i === 2 ? item : ""}</label>
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

export default () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [bio, changeBio] = useState(BIO_LENGTHS[Math.floor(BIO_LENGTHS.length / 2)]);
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, [15, 100], [1, 0]);
  // const y = useTransform(scrollY, [20, 158], [-190, 2]);
  // const y = useTransform(scrollY, [0, 40], [-190, -150]);
  const y = useTransform(scrollY, [0, 158], [-230, -120]);

  useEffect(() => {
    const stopScrollYChange = scrollY.onChange(value => {
      console.log(value);
      if (value > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
    return stopScrollYChange;
  }, [scrollY]);

  return (
    <section id="about" className="about row">
      <div style={{ position: "relative" }}>
        <motion.h2
          id="hello"
          style={{ opacity, y, rotate: "-7deg" }}
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
          initial={{
            ...initialAnimate,
            ...{
              lineHeight: "130px",
              letterSpacing: "1px",
              y: -170
            }
          }}
          animate={{
            ...introAnimate,
            ...{
              fontSize: hasScrolled ? 42 : 130,
              lineHeight: hasScrolled ? "42px" : "130px",
              letterSpacing: hasScrolled ? "3px" : "1px",
              y: hasScrolled ? 3 : -170,
            }
          }}
          transition={defaultTransition}
        >
          Omar Ibrahim.
        </motion.h1>
        <BioLength bio={bio} changeBio={changeBio} />
      </div>
      <div className="bio_text-container">
        {/* TODO: use AnimatePresence here!! */}
        {ABOUT[bio]}
      </div>
    </section >
  )
}
