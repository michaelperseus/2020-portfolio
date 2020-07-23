import React from 'react';

import LinkButton from './LinkButton';

export default function Links() {
    return (
        <div id="linkContainer">
            <h1>Check out my <span>Links!</span></h1>
            <LinkButton link={'https://twitter.com/codehardycode'} type="twitter" text="Twitter!" blurb="#100DaysOfCode!" position="topRow" />
            <LinkButton link={'https://github.com/Hardytack'} type="github" text='Github' blurb="They call me the Repo man! (...not really..)" position="topRow" />
            <LinkButton link={'http://hardytack.com/resume.pdf'} type="resume" text="My Resume!" blurb="Now in Technicolor!" position="topRow" />
            <LinkButton link={'https://codepen.io/hardytack'} type="codepen" text="Codepen!" blurb="I (JS)fiddle around here!" position="bottomRow" />
            <LinkButton link={'https://www.linkedin.com/in/michael-boro-2ba598a6/'} type="linkedin" text="LinkedIn!" blurb="Let's make a connection!" position="bottomRow lastChild" />
        </div>
    )

}