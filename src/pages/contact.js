import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="block-start" id="contact">
        <div className="container">
          <h1>This is Contact Page</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
