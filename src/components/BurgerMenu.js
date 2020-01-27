import React from 'react';
import { jsx, css } from '@emotion/core';

const Burgermenu = (props) => {
    return (
        <div css={Wrapper} onClick={props.handleNavbar}>
          <div css={ props.navbarState ? "open" : "" }>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </div>
    );
}

export default Burgermenu;

const Wrapper = css`
    position: relative;
    padding-top: .7rem;
    cursor: pointer;
    display: block;

    & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
    }

    .open span:nth-child(2) {
    opacity: 0;
    }

    .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
    }

    .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
    }

`;
