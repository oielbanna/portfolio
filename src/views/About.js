import React, { useState } from "react"
import { useTranslation } from 'react-i18next'
import "../styles/about.scss";

function BioLength() {
  const [bio, changeBio] = useState("short")

  return (

    <form id="bio-length-form">
      <fieldset className="fieldset">
        <legend className="legend">Adjust bio length:</legend>
        {/* <div id="radios">
          {['shortest', 'short', 'long', 'longest'].map((item, i) => {
            return (
              <div key={i}>
                <input id={'input' + (i + 1)} name="bio-length" type="radio" value={item} checked={bio === item} onChange={() => changeBio(item)} />
                <label htmlFor={'input' + (i + 1)}>  {i === 0 || i === 3 ? item : ""}</label>
              </div>
            );
          })}
          <span id="slider"></span>
        </div> */}

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

  return (
    <section id="about" className="about">
      <BioLength />
      <h1>
        {t('about-location')}
      </h1>
      <h1>
        {t('about-degree')}
      </h1>
      <h1>
        {t('about-work')}
      </h1>
      <h1>
        {t('about-personal')}
      </h1>
    </section>
  )
}