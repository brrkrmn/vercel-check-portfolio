import './profile.css'
import React from 'react';

export function Profile() {

    return (
        <div className='profile'>
            <h2 className='profile-title'>Profile</h2>
            <div className='profile-container'>
                <div className='profile-info'>
                    <h4>Profile</h4>
                    <ul>
                        <li><strong>Doğum Tarihi:</strong> 28.09.1999</li>
                        <li><strong>İkamet Şehri:</strong> Aydın</li>
                        <li><strong>Eğitim Durumu:</strong> Düzce Üniversitesi Bilgisayar Mühendisliği</li>
                        <li><strong>Lisans,</strong> 2025</li>
                        <li><strong>Tercih Ettiği Rol:</strong> Data Science</li>
                    </ul>
                </div>

                <div className='profile-about-me'>
                    <h4>About Me</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, 
                        odit laborum aliquam voluptatum nisi mollitia.
                    </p>
                    <p>
                        Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt 
                        quam temporibus cumque magnam!
                    </p>
                </div>
            </div>
            <div className='profile-bottom-line'></div>
        </div>
    );
};