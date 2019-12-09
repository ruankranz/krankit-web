/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'

const GalleryItem = (props) => {
    const { label, image, description, link } = props;
    return (
        <div css={ item }>
          <h5 css={ header }>{ label }</h5>
          <img source={ image } alt={ label } />
          <p>{ description }</p>
          <Link to={ link }>View</Link>
        </div>
    )
}

export default GalleryItem


const item = css`
width: 32%;
padding-bottom: 18%; /* 32:18, i.e. 16:9 */
margin-bottom: 2%; /* (100-32*3)/2 */
border: solid 1px #FFF;
text-align: center;
`

const header = css`
font-weight: 700;
text-decoration: underline;
`
