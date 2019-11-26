/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/core'
import { Link } from "react-router-dom";

function ControlBar() {
    const [color, setColor] = useState("green");

    return (
        <>
            <div css={ control_bar }>
                <Link to="/about">Home</Link>
                <Link to="/">About</Link>
                <Link to="/gallery">Code</Link>
            </div>
            <div css={ color ==="green" ? contact_me : red } onClick={() => setColor(color === "green" ? "red" : "green") }>
                <Link to="/contact">Work with me</Link>
            </div>
        </>
    );
}

export default ControlBar;


const control_bar = css`
position: relative;
align-items: center;
font-family: 'Roboto Mono', monospace;
height: 4em;
`

const contact_me = css`
align-items: center;
height: 4em;
margin: 0 0 0 auto;
`

const red = css`
align-items: center;
height: 4em;
margin: 0 0 0 auto;
color: red;
`

const container = css`
display: flex;
`
