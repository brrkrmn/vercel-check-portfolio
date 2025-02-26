import './introduce.css'
import React from 'react';
import { useLanguage } from '../context/LanguageContext'

export function Introduce () {
    const { translations, language } = useLanguage();

    if (!translations[language]) return null;

    return (
        <div className='introduce'>
            <div className='introduce-section'>
                <div className='introduce-name'>
                    <span className='introduce-line'></span>
                    <span className='introduce-text'>{translations[language].introduce_name}</span>
                </div>
                <h1 className='introduce-title'>
                    {translations[language].introduce_title_1} <br />
                    {translations[language].introduce_title_2} <br />
                    {translations[language].introduce_title_3}
                </h1>
                <p className='introduce-desc'>
                    {translations[language].introduce_desc}
               </p>

                <div className='introduce-links'>
                    <a href="#" className='introduce-btn introduce-btn-primary'>{translations[language].hire_me}</a>
                    <a href="https://github.com/Zodiacbtw" className='introduce-btn'>
                        <i className='fa-brands fa-github'></i> {translations[language].github}
                    </a>
                    <a href="https://www.linkedin.com/in/dogukantekin/" className='introduce-btn'>
                        <i className='fa-brands fa-linkedin-in'></i> {translations[language].linkedin}
                    </a>
                </div>
            </div>
            <div className='introduce-img'>
                <img src="https://media.istockphoto.com/id/1396840742/tr/fotoğraf/happy-african-builder-workman-standing-pleased.jpg?s=612x612&w=0&k=20&c=tTEcYMuTwrjUG_Bf2Dqx6pjLEF8wYrNr1TygQHXWVQk=" alt="Profile" />
            </div>
        </div>
    );
};