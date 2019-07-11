import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import SectionAbout from "../components/section-about"
import SectionWorks from "../components/section-works"
import SectionContact from "../components/section-contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionAbout/>  
    <SectionContact/> 
    <SectionWorks/>

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    
  </Layout>
)

export default IndexPage
