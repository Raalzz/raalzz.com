import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <div className="overlay">
        <h2>Rahul Sawant</h2>
      </div>
      <div className="bgimg" />
    </div>
  </Layout>
)

export default Home
