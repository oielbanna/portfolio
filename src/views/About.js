import React from "react"
import { useTranslation } from 'react-i18next'


export default () => {
    const { t } = useTranslation();

    return (
        <section>
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