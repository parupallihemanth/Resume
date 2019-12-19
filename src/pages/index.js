import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Heading from '../components/Reusable/Heading'
import DualInfo from '../components/Reusable/DualInfo'
import Skills from '../components/Reusable/Skills'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi Hemanth</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div> */}
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title="PARUPALLI HEMANTH BABU"
    caption="Implementing tech to solve a problem"
    heroclass="text-background"
    />
    
   {/* <Heading 
   title="About me"
   />  */}
   <DualInfo heading="About me"
   />

   <Skills heading="Skills"
   />
    
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath:{eq: "background2.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}


`

export default IndexPage
