import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img, title, caption, heroclass}) {
    return (
        <BackgroundImage
        fluid={img}
        className = {heroclass}
        >
        <h6 className="text-dark text-upper display-4 text-center">{title}</h6>
        <h5 className="text-warning">{caption}</h5>
        </BackgroundImage>     
    )
}
