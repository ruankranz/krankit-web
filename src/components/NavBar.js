/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core'
import NavItems from './NavItems'
import NavTitle from './NavTitle.js'

function NavBar(props) {

    const { label } = props;

    return (
        <>
            <NavTitle label={ label }/>
            <NavItems/>
        </>
    );
}

export default NavBar;
