import React from 'react'

import '../styles/components/introduction.sass'
import mainImg from '../assets/mainImg.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email';

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
                    <button onClick={ () => window.open( 'https://github.com/gabrielmjacques' ) }>
                        <GitHubIcon />
                    </button>
                    <button onClick={ () => window.open( 'https://www.linkedin.com/in/edson-gabriel-jacques-5b3678242/' ) }>
                        <LinkedInIcon />
                    </button>
                    <button onClick={ () => window.open( 'https://www.instagram.com/gabriel_gtbp/' ) }>
                        <InstagramIcon />
                    </button>
                    <button onClick={ () => window.open( 'mailto:egmoreira10@gmail.com' ) }>
                        <EmailIcon />
                    </button>
                </div>
            </div>

        </div>
    )
}
