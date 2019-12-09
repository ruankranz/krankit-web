/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import GalleryItem from './GalleryItem'

const Gallery = ({ items }) => {
    return (
        <div css={ container }>
            {items.map(item =>
                <GalleryItem
                    label={ item.label }
                    description={ item.desription }
                    link={ item.link }
                    image={ item.image }/>
            )}
        </div>
    )
}

export default Gallery

const container = css` 
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
