'use client';
import styles from './Photos.module.css';

export function CookieBanner() {
    return (     
        <div className="warning warning--active">
        <div className="warning__text">На этом веб-сайте используются cookie.</div>
        <button className="warning__apply" type="button">OK</button>
            <a className="warning__read" href="https://ru.wikipedia.org/wiki/Cookie" target="_blank">Читать полностью</a>
        </div>
    )
}