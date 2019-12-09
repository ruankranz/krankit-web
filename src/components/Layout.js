/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import NavBar from './NavBar';
import ControlBar from './ControlBar';

function Layout(props) {

    const { children, label } = props;

    return (
        <div css={ main }>
            <div css={ content }>
                <div css={ content_inner }>
                    <div css={ content_top } >
                        <NavBar label={ label }/>
                    </div>
                    <div css={ content_body }>
                        { children }
                    </div>
                    <div css={ content_bottom }>
                        <ControlBar/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;

const main =css`
display: flex;
overflow: hidden;
height: 100vh;
`

const content = css`
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
width: 100%;
height: 95%;
`

const content_bottom = css`
display: flex;
align-items: center;
width: 100%;
margin: auto 0 0 0;
`

const content_inner = css`
z-index: 100;
flex-direction: column;
align-content: flex-start;
padding: 2.5em 2.5em 0;
position: absolute;
top: 0;
left: 0;
right:0;
display: flex;
align-items: center;
height: 100%;
`

const content_body = css`
display: block;
text-align: center;
font-size: 1.85em;
flex: none;
width: 100%;
margin: 2em 0 0 auto;
`

const content_top = css`
display: flex;
align-items: center;
flex: none;
width: 100%;
font-family: 'Roboto Mono', monospace;
`
