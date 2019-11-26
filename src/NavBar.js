/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiLightningArc } from 'react-icons/gi';
import GlitchClip from 'react-glitch-effect/core/Clip';
import GlitchText from 'react-glitch-effect/core/Text';

function NavBar(props) {

    const { label } = props;

    return (
        <>
            <GlitchClip>
                <h2 css={ header }>
                    { label === undefined ? "cd /usr/krankit" : `cd /usr/krankit/${label}`}   
                </h2>
            </GlitchClip>
            <div css={ menu_items_container }>
                <Link css={ menu_link } to="/about">
                    <FaLinkedin css={ menu_link } />
                </Link>
                <Link css={ menu_link } to="/">
                    <FaGithub css={ menu_link } />
                </Link>
                <Link css={ menu_link } to="/gallery">
                    <FaTwitter css={ menu_link } />
                </Link>
            </div>
        </>
    );
}

export default NavBar;


const header = css`
font-size: 1.2em;
font-weight: normal;
display: flex;
align-items: center;
height: 1.75em;
margin: 0;
`

const icon = css`
font-size: 1.6em;
margin-left: 6px;
`

const menu_items_container = css`
display: flex;
justify-content: space-between;
align-items: center;
width: 9em;
margin: 0 0 0 auto;
`

const menu_link = css`
display: block;
width: 2em;
height: 2.35em;
margin: 0 auto;
fill: currentColor;
`

const menu_inner = css`
margin: 0;
padding: 0;
list-style: none;
`
