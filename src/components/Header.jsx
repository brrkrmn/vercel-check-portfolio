import { DarkModeToggle } from './DarkModeToggle';
import './header.css';
import LanguageSwitcher from './LanguageSwitcher';

export function Header() {

    return (
        <div className='header'>
            <div className='top-section'>
                <DarkModeToggle />
                <LanguageSwitcher />
            </div>

            <div className='bottom-section'>
                <div className='profile-icon'>D</div>
                <div className='buttons'>
                </div>
            </div>
        </div>
    )
};