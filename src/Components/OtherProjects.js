import React from 'react'

import Project from './Project';

import { projectData } from '../utils/projectInfo';


export default function OtherProjects() {
    projectData.forEach(proj => console.log(proj));
    return (
        <div id="otherProjects">
            <h1>Or take a look at some of my <span>Other Projects!</span></h1>
            {
                projectData.map(proj => {
                    return <Project key={proj.index} title={proj.title} img={proj.img} description={proj.description} />
                })
            }
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    )
}
