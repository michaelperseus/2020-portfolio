import React from 'react';

export default function Hero() {
    return (
        <div id="hero">
            <h1>Pokemon Challenges!</h1>
            <div id="description">
                <p>'Pokemon Challenges' is a passion project of mine that I have been developing over the past 6+ months. It's designed to be a hub were players of the Pokemon series of games can gather, track their different playthroughs and interact with other players!</p>
                <p>The site features the ability for users to log in and enter data for every mainline Pokemon game, including what Pokemon they used and a field to add personal notes about the run. Users can also comment on other users runs!</p>
                {/* <p>The site is currently in Beta Testing so there are still a ton of features to add and bugs to fix, but hopefully it gives a good idea of what I like to do!</p> */}
            </div>
            <div id="techStack" className="bigTech">
                <ul><span>Featuring:</span>
                    <li>- Mongoose</li>
                    <li>- Express</li>
                    <li>- React</li>
                    <li>- Node</li>
                    <li>- React Router</li>
                    <li>- Sass</li>
                    <li>- AWS</li>
                    <li>- bcryptjs</li>
                    <li>- and more!</li>
                </ul>
            </div>
            <div id="techStack" className="smallTech">
                <ul><span>Featuring</span>
                    <li>- Mongoose</li>
                    <li>- Express</li>
                    <li>- React</li>
                    <li>- Node</li>
                    <li>- React Router</li>
                    <li>- Sass</li>
                    <li>- AWS</li>
                    <li>- bcryptjs</li>
                    <li>- and more!</li>
                </ul>
            </div>
            <div id="heroButtons">
                <button><a href="https://hardy-pokemon-challenge.herokuapp.com/" target="black_">Live Demo</a></button>
                <button><a href="https://github.com/Hardytack/pokemon-challenges" target="black_">Github Repo</a></button>
                {/* <button><a href="#">Case Study</a></button> */}
            </div>
        </div>
    )
}