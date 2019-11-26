/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import Layout from './Layout'
import { AiOutlineArrowDown } from 'react-icons/ai';
import test from './home.gif'

export default function Home () {
    return (
        <Layout>
            <p>Welcome to krankit</p>
            <AiOutlineArrowDown/>
        </Layout>
    )
}

