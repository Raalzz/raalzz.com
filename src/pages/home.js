import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import TypeWriter from "../components/TypeWriter/TypeWriter"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <div className="overlay">
        <h2>
          <TypeWriter
            heading={""}
            dataText={[
              "a Programmer",
              "a Musicophile",
              "a Dubstep Dancer",
              "an INFP",
            ]}
          />
        </h2>
      </div>
      <div className="bgimg" />
    </div>
  </Layout>
)

export default Home
