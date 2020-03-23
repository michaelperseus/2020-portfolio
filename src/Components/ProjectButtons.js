import React from 'react'

export default function ProjectButtons(props) {
    if (props.type === 'ab') {
        return (
            <div className="buttonGroup">
                <button className="github"><a href={props.links[0]}>Github Repo</a></button>
                <button className="live"><a href={props.links[1]}>Live Demo</a></button>
            </div>
        )
    }

    if (props.type === 'a') {
        return (
            <div className="buttonGroup">
                <button className="single github"><a href={props.links[0]}>Github Repo</a></button>
            </div>
        )
    }
    if (props.type === 'b') {
        return (
            <div className="buttonGroup">
                <button className="single live"><a href={props.links[1]}>Live Demo</a></button>
            </div>
        )
    }
}
