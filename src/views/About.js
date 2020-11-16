import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/about.scss";
import { A } from "./components";
import { CONTACTS } from "../constants";

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


export default () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [bio, changeBio] = useState(bioLengths[Math.floor(bioLengths.length / 2)]);
  const { scrollY } = useViewportScroll()
  const opacity = useTransform(scrollY, [15, 80], [1, 0]);
  const y = useTransform(scrollY, [0, 158], [-80, 0]);

  scrollY.onChange(value => {
    console.log(value);
    if (value > 136) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });
  
  return (
    <>
      <section id="about" className="about row">
          <div>
            <motion.h1
              id="name"
              initial={{
                scaleY: 4.2,
                scaleX: 3,
              }}
              animate={{
                scaleY: hasScrolled? 1: 4.2,
                scaleX:  hasScrolled? 1: 3,
              }}
              transition={{ 
                ease: "easeInOut", 
                duration: 0.4 
              }}
              style={{ y }}
            >
              <motion.h1 id="hello" style={{ opacity }}>
                <span role="img" aria-label="Wave">👋</span> hi, I'm
              </motion.h1>
              Omar Ibrahim
            </motion.h1>
            <BioLength bio={bio} changeBio={changeBio} />
          </div>
          <div className="bio_text-container">
            {bio === "shortest" && (<p><strong>Omar</strong> is trying his very best.</p>)}

            {bio === "mid" && (<p><strong>Omar</strong> likes to make fun, <span className="shake">interactive</span> things with code. He gets particularly excited when these things involve working with others to make an even bigger impact.</p>)}

            {bio === "longest" && (<p><strong>Omar</strong> is a full-stack web developer at <A className="link" href="https://www.capitalone.ca/">Capital One</A> based in Toronto, Canada (but that's flexible considering, you know...the pandemic). He likes to <A className="link" target="_blank" href={CONTACTS.GITHUB.URL}>code</A> with React/Vue and Spring Boot. But his true passion lies in Software Architecture. So, he set out on a journey to take the <A className="link" href="https://aws.amazon.com/certification/certified-solutions-architect-associate/">AWS Certified Solutions Architect</A> Course - which you can follow on <A className="link" href={CONTACTS.TWITTER.URL}>Twitter.</A> He also enjoys writing medium articles sometimes - he says it helps him <q><i>explore a new medium.</i></q></p>)}

            {!bioLengths.includes(bio) && <p><strong>Omar</strong> is embarassed because there has been an error. Oops.</p>}
          </div>
      </section>
    </>
  )
}
