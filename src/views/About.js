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


export default () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [bio, changeBio] = useState(BIO_LENGTHS[Math.floor(BIO_LENGTHS.length / 2)]);
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, [15, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 158], [-80, 5]);
  const yHello = useTransform(scrollY, [0, 158], [-230, -120]);

  useEffect(() => {
    const stopScrollYChange = scrollY.onChange(value => {
      if (value > 97) {
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
        <motion.h2 id="hello" style={{ opacity, y: yHello, rotate: "-7deg" }}>
          <span role="img" aria-label="Wave">👋</span> hi, I'm
            </motion.h2>
        <motion.h1
          id="name"
          initial={{
            scale: 1,
          }}
          animate={{
            scale: hasScrolled ? 1 : 3.5,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.4
          }}
          style={{ y }}
        >
          Omar Ibrahim.
            </motion.h1>
        <BioLength bio={bio} changeBio={changeBio} />
      </div>
      <div className="bio_text-container">
        {ABOUT[bio]}
      </div>
    </section>
  )
}
