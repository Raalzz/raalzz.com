import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default Home