/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import Layout from './Layout'

export default function Home () {

    return (
        <Layout>
            <div css={ text_container }>
                <div>
                    <p css={ main_text }>Unfortunately...</p>
                </div>
                <div>
                    <p css={ mid_text }>no one can be told what the Matrix is.</p>
                </div>
                <div>
                    <p css={ bot_text }>You have to see it for yourself.</p>
                </div>
            </div>
        </Layout>
    )
}


const text_container = css`
width: 100%;
font-size: 1.4em;
display: flex;
flex-direction: column;
`


const main_text = css`
font-size: 2em;
float: left;
`

const mid_text = css`
font-size: 1.6em;
float: left;
`
const bot_text = css`
font-size: 1.4em;
float: right;
`
