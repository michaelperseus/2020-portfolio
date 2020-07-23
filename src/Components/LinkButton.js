import React from 'react'



export default function LinkButton(props) {
    return (
        <div className={`linkButton ${props.type} ${props.position}`}>
            <a href={props.link}><span className="title">{props.text}</span><span className="blurb">{props.blurb}</span></a>

        </div>
    )
}
