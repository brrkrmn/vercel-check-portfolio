import { DarkModeToggle } from './DarkModeToggle';
import './header.css';

export function Header() {
    return (
        <div className='header'>
            <div className='top-section'>
                <DarkModeToggle />
            </div>

            <div className='bottom-section'>
                <div className='profile-icon'>D</div>
                <div className='buttons'>
                    HEHEHEHEHE
                </div>
            </div>
        </div>
    )
};