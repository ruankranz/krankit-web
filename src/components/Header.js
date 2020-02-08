/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'

const PageHeader = ({title, sub_title}) => {

    return (
        <div css={ container }>
            <h2> { title } </h2>
            <p>{ sub_title }</p>
        </div>
    )
}

export default PageHeader

const container = css` 
align-self: center;
`
