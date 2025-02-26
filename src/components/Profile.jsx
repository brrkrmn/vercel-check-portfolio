import { useLanguage } from '../context/LanguageContext';
import './profile.css';

export function Profile() {
    const { translations, language } = useLanguage();

    if (!translations[language]) return null;

    return (
        <div className='profile'>
            <h2 className='profile-title'>{translations[language].profile}</h2>
            <div className='profile-container'>
                <div className='profile-info'>
                    <h4>{translations[language].profile}</h4>
                    <ul>
                        <li><strong>{translations[language].birth_date}</strong> 28.09.1999</li>
                        <li><strong>{translations[language].city}</strong> Aydın</li>
                        <li><strong>{translations[language].education}</strong> Düzce Üniversitesi Bilgisayar Mühendisliği</li>
                        <li><strong>{translations[language].degree}</strong> 2025</li>
                        <li><strong>{translations[language].preferred_role}</strong> Data Science</li>
                    </ul>
                </div>

                <div className='profile-about-me'>
                    <h4>{translations[language].about_me}</h4>
                    <p>
                        {translations[language].about_me_desc}
                    </p>
                    <p>
                        {translations[language].about_me_desc}
                    </p>
                </div>
            </div>
            <div className='profile-bottom-line'></div>
        </div>
    );
};