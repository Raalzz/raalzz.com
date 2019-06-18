import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="block-start" id="contact">
        <div className="container">
          <h2>Feel free to contact me through email,</h2>
          <a href="mailto:contact@raalzz.com" target="_top">
            contact@raalzz.com
          </a>
          <h3>Or,</h3>
          <div>
            <a
              href="https://twitter.com/Raalzz"
              target="_blank"
              rel="nofollow"
              className="fa fa-twitter"
            />
            <a
              href="https://github.com/Raalzz"
              target="_blank"
              rel="nofollow"
              className="fa fa-github"
            />
            <a
              href="https://www.linkedin.com/in/rahul-sawant-895481109/"
              target="_blank"
              rel="nofollow"
              className="fa fa-linkedin"
            />
            <a
              href="https://www.reddit.com/user/Raalzz619"
              target="_blank"
              rel="nofollow"
              className="fa fa-reddit"
            />
            <a
              href="https://www.last.fm/user/Raalzz"
              target="_blank"
              rel="nofollow"
              className="fa fa-lastfm"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
