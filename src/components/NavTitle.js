/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import GlitchClip from 'react-glitch-effect/core/Clip';

function NavTitle(props) {

    const { label } = props;

    return (
        <GlitchClip>
            <h2 css={ nav_title }>
                { label === undefined ? "cd /usr/krankit" : `cd /usr/krankit/${label}`}
            </h2>
        </GlitchClip>
    );
}

export default NavTitle;


const nav_title = css`
font-size: 1.4em;
font-weight: normal;
display: flex;
align-items: center;
height: 1.75em;
margin: 0;
`

