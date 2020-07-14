import React, { useState } from "react"
import { useTranslation } from 'react-i18next'
import "../styles/about.scss";

function BioLength({bio, changeBio}) {

  return (

    <form id="bio-length-form">
      <fieldset className="fieldset">
        <legend className="legend">Adjust bio length:</legend>
        <ul className="container">
          {['shortest', 'short', 'long', 'longest'].map((item, i) => {
            return (
              <li key={i}>
                <input id={'input' + (i + 1)} name="bio-length" type="radio" value={item} checked={bio === item} onChange={() => changeBio(item)} />
                <label htmlFor={'input' + (i + 1)} >{i === 0 || i === 3 ? item : ""}</label>
              </li>
            );
          })}
        </ul>

      </fieldset>
    </form>


  );
}


export default () => {
  const { t } = useTranslation();
  const [bio, changeBio] = useState("short")

  return (
    <section id="about" className="about">
      <BioLength bio={bio} changeBio={changeBio} />
      <h1>
        {t('about-' + bio)}
      </h1>
    </section>
  )
}