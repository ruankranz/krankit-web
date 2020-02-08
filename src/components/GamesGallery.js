/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core'
import Layout from './Layout'
import PageHeader from './Header'
import Gallery from './Gallery'
import metatron from '../metatron.png'

const GamesGallery = () => {

    const items = [
        {label: "test", image: metatron, description: "Just say mkay!", link: "https://krankit.co.za"},
        {label: "test", image: metatron, description: "Just say mkay!", link: "https://krankit.co.za"},
        {label: "test", image: metatron, description: "Just say mkay!", link: "https://krankit.co.za"},
        {label: "test", image: metatron, description: "Just say mkay!", link: "https://krankit.co.za"},
        {label: "test", image: "", description: "Just say mkay!", link: "https://krankit.co.za"},
        {label: "test", image: "", description: "Just say mkay!", link: "https://krankit.co.za"},
        {label: "test", image: "", description: "Just say mkay!", link: "https://krankit.co.za"},
        {label: "test", image: "", description: "Just say mkay!", link: "https://krankit.co.za"},
        {label: "test", image: "", description: "Just say mkay!", link: "https://krankit.co.za"},
    ]

    return (
        <Layout label="gallery">
          <PageHeader title="Games Gallery" sub_title="Checkout some of the cool games we've made"/>
          <Gallery items={ items } />
        </Layout>
    )
}

export default GamesGallery
