/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import Layout from './Layout'
import GalleryItem from './GalleryItem'

const AppGallery = ({ items }) => {
    return (
        <Layout label="gallery">
            <div css={ container }>
                {items.map(item =>
                    <GalleryItem
                        label={ item.label }
                        description={ item.desription }
                        link={ item.link }
                        image={ item.image }
                    />
                )}
            </div>
        </Layout>
    )
}

export default AppGallery

const container = css` 
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
