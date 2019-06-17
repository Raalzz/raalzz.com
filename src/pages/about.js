import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />

      <div className="block-start" id="about">
        <div className="container">
          <h1>This is About Page</h1>
        </div>
      </div>
    </Layout>
  )
}

export default About
