import React from 'react'
import { useTranslation } from 'react-i18next'
import A from "./a";

const LanguageSelector = (props) => {
    const { i18n } = useTranslation()
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div {...props} className="lang_selector" onChange={changeLanguage}>
            <A>
                <input type="radio" value="en" id="en" name="language" defaultChecked />
                <label htmlFor="en" className={i18n.language !== "en" ? 'active' : null}>EN.</label>
            </A>
            <A>
                <input type="radio" value="fr" id="fr" name="language" />
                <label htmlFor="fr" className={i18n.language !== "fr" ? 'active' : null}>FR.</label>
            </A>
        </div>
    )
}

export default LanguageSelector