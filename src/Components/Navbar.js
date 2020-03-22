import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div id="navbar">
            <h1>Michael Boro</h1>
            <h2>Contact</h2>
            <Link to="/react-test">Home</Link>
            <Link to="/react-test/box">Box</Link>
        </div>
    )
}