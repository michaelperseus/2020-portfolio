import React from 'react'
import { projectData } from '../utils/projectInfo'

export default function Project(props) {
    return (
        <div className="project">
            <img src={props.img || "https://via.placeholder.com/1280x720.png"}></img>
            <h3>{props.title || 'Project Title'}</h3>
            <p>{props.description}</p>
        </div>
    )
}
