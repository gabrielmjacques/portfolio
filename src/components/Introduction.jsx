import React from 'react'

import '../styles/components/introduction.sass'
import mainImg from '../assets/mainImg.png'
import InstagramIcon from '../assets/instagram-icon.png'
import GitHubIcon from '../assets/github-icon.png'
import LinkedinIcon from '../assets/linkedin-icon.png'

export default function Introduction()
{
    return (
        <div className='introduction'>

            <div className='card'>
                <img
                    className='main-image'
                    src={ mainImg } />
                <h2>Edson Gabriel</h2>
                <p>Front-end Developer</p>

                <div className='social-medias'>
                    <button><a href="https://github.com/gabrielmjacques" target={ '_blank' }><img src={ GitHubIcon } alt="Meu GitHub" /></a></button>
                    <button><a href="https://www.linkedin.com/in/edson-gabriel-jacques-5b3678242/" target={ '_blank' }><img src={ LinkedinIcon } alt="Meu Linkedin" /></a></button>
                    <button><a href="https://www.instagram.com/gabriel_gtbp/" target={ '_blank' }><img src={ InstagramIcon } alt="Meu Instagram" /></a></button>
                </div>
            </div>

        </div>
    )
}
