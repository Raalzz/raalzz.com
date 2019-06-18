import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import display_img from "../images/display_image.jpg"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />

      <div className="block-start" id="about">
        <div className="container">
          <div>
            <img src={display_img} alt="Display" height="150" width="150" />
          </div>
          <h1>Hi, this is Rahul.</h1>
          <p>
            Currently working in a startup called WheelsBox as a Front-end
            Developer. I like exploring new Techs and Hopping new Stacks is what
            I enjoy the most.
          </p>
          <p>
            I enjoy dancing, Dubstep is my forte. I am also a Big EDM and
            Skrillex Fan. Follow me on last.fm to see my scrobles.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
