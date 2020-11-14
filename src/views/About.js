import React, { useState } from "react";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";
import "../styles/about.scss";
import { A, Character } from "./components";

const bioLengths = ['shortest', 'mid', 'longest'];

function BioLength({ bio, changeBio }) {
  return (
    <form id="bio-length-form">
      <fieldset className="fieldset">
        <legend className="legend">Adjust bio length:</legend>
        <ul className="container">
          {bioLengths.map((item, i) => {
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

const fullScrollRange = [15, 160];
const shortScrollRange = [130, 170];
const shortestRange = [160, 170];

export default () => {
  const [bio, changeBio] = useState(bioLengths[Math.floor(bioLengths.length / 2)]);
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, fullScrollRange, [1, 0]);
  const y = useTransform(scrollY, shortScrollRange, [0, 20]);

  // const oTransform = {
  //   y: useTransform(scrollY, shortestRange, [0, -120]),
  //   x: useTransform(scrollY, shortestRange, [0, -120]),
  //   fontSize: useTransform(scrollY, shortestRange, [0, -120]),
  // };
  // const y_I = useTransform(scrollY, shortestRange, [0, 20]);

  return (
    <div style={{ height: "120vh" }}>
      <section id="intro">
        <div className="bio_intro-container">
          <motion.h1 id="hello" style={{ opacity }}>
            <span role="img" aria-label="Wave">👋</span> hi, I'm
          </motion.h1>
          <motion.h1
            id="name"
          >
            Omar
            &nbsp;
            Ibrahim
          </motion.h1>
        </div>
        {/* <Character /> */}
      </section>
      <section id="about" className="about">
        <BioLength bio={bio} changeBio={changeBio} />
        <div className="bio_text-container">
          {bio === "shortest" && (<p><strong>Omar</strong> is trying his very best.</p>)}

          {bio === "mid" && (<p><strong>Omar</strong> is a Computer Science &#38; Psychology graduate from <A className="link" target="_blank" href="https://www.mcgill.ca">McGill University</A>. Now, he is working as a full-stack web developer at <A className="link" target="_blank" href="https://www.capitalone.ca">Capital One.</A></p>)}

          {bio === "longest" && (<p><strong>Omar</strong> is a full-stack web developer. He likes to experiment with different creative mediums. He spends his time working on <A className="link" href="https://github.com/oielbanna">creative coding projects</A>, writing <A className="link" href="https://medium.com/@oielbanna">Medium articles</A>, making <A className="link" href="https://www.behance.net/oielbanna">digital art</A> while <A className="link" href="https://twitter.com/Omarcodess">tweeting</A> about all of it.</p>)}

          {!bioLengths.includes(bio) && <p><strong>Omar</strong> is embarassed because there has been an error. Oops.</p>}
        </div>
      </section>
    </div>
  )
}