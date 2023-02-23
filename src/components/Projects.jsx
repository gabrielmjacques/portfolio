import React, { useState } from 'react'

import ProjectCard from './ProjectCard'
import '../styles/components/projects.sass'
import Button from '@mui/material/Button'
import ProjectsFile from '../ProjectsFile.js'

export default function Projects()
{
    const [ selectedProject, setSelectedProject ] = useState( ProjectsFile[ 0 ] )

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
                        onClick={ () => setSelectedProject( ProjectsFile[ i ] ) }>
                        <p> { project.name } </p>
                    </Button>

                </il>
            }
        )
    }

    const GetSelectedProject = () =>
    {
        return <ProjectCard selectedProject={ selectedProject } />
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
