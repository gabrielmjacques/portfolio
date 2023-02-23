import React from 'react'

import '../styles/components/projectCard.sass'
import Button from '@mui/material/Button'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function ProjectCard( props )
{
    const GetProjectTechs = () =>
    {
        return props.selectedProject.techs.map(
            ( tech, i ) =>
            {
                return <Button
                    key={ i }
                    variant='outlined'>
                    { tech }
                </Button>
            }
        )
    }

    return (
        <div className='selected-project'>

            <div className='img-container'>
                <img src={ props.selectedProject.img } alt={ 'Imagem do projeto selecionado' } />
            </div>

            <h2>{ props.selectedProject.name }</h2>

            <div className='desc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptate earum distinctio eum eveniet recusandae ipsam perspiciatis, iste assumenda odio omnis et alias enim est aut ad! Modi, sunt ex!</p>
            </div>

            <div className='project-techs'>
                { GetProjectTechs() }
            </div>

            <div className='project-buttons'>
                <Button variant='contained' onClick={ () => window.open( props.selectedProject.github ) }>GitHubㅤ<GitHubIcon className='button-icon' /></Button>
                <Button variant='contained' onClick={ () => window.open( props.selectedProject.demo ) }>Demoㅤ<LaunchIcon className='button-icon' /></Button>
            </div>
        </div >
    )
}
