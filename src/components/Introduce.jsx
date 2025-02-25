import './introduce.css'
import React from 'react';

export function Introduce () {

    return (
        <div className='introduce'>
            <div className='introduce-section'>
                <div className='introduce-name'>
                    <span className='introduce-line'></span>
                    <span className='introduce-text'>Doğukan Tekin</span>
                </div>
                <h1 className='introduce-title'>
                    Curious mind <br />
                    Creative spirit <br />
                    Beyond the boundaries
                </h1>
                <p className='introduce-desc'>
                Hello, I'm Doğukan, a Computer Engineer. If your company is looking 
                for a Data Scientist who can analyze data, derive meaningful insights, 
                and generate business value, I would be happy to connect.
                </p>

                <div className='introduce-links'>
                    <a href="#" className='introduce-btn introduce-btn-primary'>Hire me</a>
                    <a href="https://github.com/Zodiacbtw" className='introduce-btn'>
                        <i className='fa-brands fa-github'></i> Github
                    </a>
                    <a href="https://www.linkedin.com/in/dogukantekin/" className='introduce-btn'>
                        <i className='fa-brands fa-linkedin-in'></i> Linkedin
                    </a>
                </div>
            </div>
            <div className='introduce-img'>
                <img src="https://media.istockphoto.com/id/1396840742/tr/fotoğraf/happy-african-builder-workman-standing-pleased.jpg?s=612x612&w=0&k=20&c=tTEcYMuTwrjUG_Bf2Dqx6pjLEF8wYrNr1TygQHXWVQk=" alt="Profile" />
            </div>
        </div>
    );
};