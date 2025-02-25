import './Header.css'
import React from 'react'

export function Header() {

    return (
        <div className='header'>
            <div className='profile-icon'>D</div>
            <div className='buttons'>
                <a href="#" className='button-child'>Skills</a>
                <a href="#" className='button-child'>Projects</a>
                <a href="#" className='button-child button-child-primary'>Hire me</a>
            </div>
        </div>
    )
};