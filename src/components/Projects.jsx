import React, { useState } from 'react'

import ProjectCard from './ProjectCard'
import '../styles/components/projects.sass'
import Button from '@mui/material/Button'
import ProjectsFile from '../ProjectsFile.js'

export default function Projects()
{
    const [ selectedProject, setSelectedProject ] = useState( ProjectsFile[ 0 ] )
    const [ fadeOut, setFadeOut ] = useState( false )
    const [ fadeIn, setFadeIn ] = useState( false )

    const GetProjectList = () =>
    {
        return ProjectsFile.map(
            ( project, i ) =>
            {
                return <il
                    key={ i }>

                    <Button
                        variant="outlined"
                        className='list-button'
                        onClick={ () =>
                        {
                            if ( selectedProject != project )
                            {
                                setFadeOut( true )

                                setTimeout( () =>
                                {
                                    setSelectedProject( ProjectsFile[ i ] )
                                    setFadeOut( false )

                                    setFadeIn( true )

                                    setTimeout( () =>
                                    {
                                        setFadeIn( false )

                                    }, 400 );

                                }, 350 );
                            }
                        }
                        }>
                        <p> { project.name } </p>
                    </Button>

                </il>
            }
        )
    }

    const GetSelectedProject = () =>
    {
        return <div className={ `${ fadeOut ? 'fade-out' : '' } ${ fadeIn ? 'fade-in' : '' }` }>
            < ProjectCard selectedProject={ selectedProject } />
        </div >
    }

    return (
        <div className='projects'>
            <div className='projects-area'>

                <h1>Principais Projetos</h1>

                <div className='projects-render'>

                    <ul className='projects-list'>
                        { GetProjectList() }
                    </ul>

                    <div className='project-info'>
                        { GetSelectedProject() }
                    </div>

                </div>

            </div>
        </div>
    )
}
