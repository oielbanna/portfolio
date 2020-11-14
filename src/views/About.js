import React, { useState } from "react"
// import { useTranslation } from 'react-i18next'
import "../styles/about.scss";
import { A } from "./components";

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

const bioLengths = ['shortest', 'mid', 'longest'];

export default () => {
  // const { t } = useTranslation();
  const [bio, changeBio] = useState(bioLengths[Math.floor(bioLengths.length / 2)]);
  return (
    <section id="about" className="about">
      <BioLength bio={bio} changeBio={changeBio} />
      <div className="about_text-container">
        {bio === "shortest" && (<p><strong>Omar</strong> is trying his very best.</p>)}

        {bio === "short" && (<p><strong>Omar</strong> is a Computer Science &#38; Psychology graduate from <A className="link" target="_blank" href="https://www.mcgill.ca">McGill University</A>. Now, he is working as a full-stack web developer at <A className="link" target="_blank" href="https://www.capitalone.ca">Capital One.</A></p>)}

        {bio === "long" && (<p><strong>Omar</strong> is a full-stack web developer. He likes to experiment with different creative mediums. He spends his time working on <A className="link" href="https://github.com/oielbanna">creative coding projects</A>, writing <A className="link" href="https://medium.com/@oielbanna">Medium articles</A>, making <A className="link" href="https://www.behance.net/oielbanna">digital art</A> while <A className="link" href="https://twitter.com/Omarcodess">tweeting</A> about all of it.</p>)}

        {bio === "longest" && (<p><strong>Omar</strong> </p>)}

        {!bioLengths.includes(bio) && <p><strong>Omar</strong> is embarassed because there has been an error. Oops.</p>}
      </div>
    </section>
  )
}