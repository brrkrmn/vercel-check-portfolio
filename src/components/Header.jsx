import { useLanguage } from '../context/LanguageContext';
import { DarkModeToggle } from './DarkModeToggle';
import './header.css';

export function Header() {
    const { translations, language } = useLanguage();

    if (!translations[language]) return null;

    return (
        <div className='header'>
            <div className='top-section'>
                <DarkModeToggle />
            </div>

            <div className='bottom-section'>
                <div className='profile-icon'>D</div>
                <div className='buttons'>
                    <a href="#" className='button-child'>{translations[language].skills}</a>
                    <a href="#" className='button-child'>{translations[language].projects}</a>
                    <a href="#" className='button-child button-child-primary'>{translations[language].hire_me}</a>
                </div>
            </div>
        </div>
    )
};