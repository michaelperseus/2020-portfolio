import React from 'react'

import ProjectButtons from './ProjectButtons';

export default function Project(props) {
    return (
        <div className="project">
            <div className="projBackground">
                <img src={props.img || "https://via.placeholder.com/1280x720.png"} alt={props.alt}></img>
                <h3>{props.title || 'Project Title'}</h3>
                <p>{props.description}</p>
                <ProjectButtons type={props.buttonType} links={[props.github, props.live]} />
            </div>
        </div>
    )
}
