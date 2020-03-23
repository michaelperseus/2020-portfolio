import React from 'react'

import Project from './Project';

import { projectData } from '../utils/projectInfo';


export default function OtherProjects() {
    return (
        <div id="otherProjects">
            <h1>Or take a look at some of my <span>Other Projects!</span></h1>
            {
                projectData.map(proj => {
                    return <Project key={proj.index} title={proj.title} img={proj.img} description={proj.description} buttonType={proj.buttonType} alt={proj.alt} github={proj.github} live={proj.live} />
                })
            }
        </div>
    )
}
