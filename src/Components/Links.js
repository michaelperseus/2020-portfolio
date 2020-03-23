import React from 'react';

import LinkButton from './LinkButton';

export default function Links() {
    return (
        <div id="linkContainer">
            <h1>Check out my <span>Links!</span></h1>
            <LinkButton link={'https://github.com/Hardytack'} type="github" text='Github' blurb="They call me the Repo man! (...not really..)" />
            <LinkButton link={'https://twitter.com/codehardycode'} type="twitter" text="Twitter!" blurb="#100DaysOfCode!" />
            <LinkButton link={'http://hardytack.com/resume.pdf'} type="resume" text="My Resume!" blurb="Now in Technicolor!" />
            <LinkButton link={'https://codepen.io/hardytack'} type="codepen" text="Codepen!" blurb="I (JS)fiddle around here!" />
            <LinkButton link={'https://codesandbox.io/u/Hardytack'} type="sandbox" text="Code Sandbox!" blurb="Let's build a sand castle!" />
        </div>
    )

}