import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import {
  FaLastfm,
  FaRedditAlien,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="block-start" id="contact">
        <div className="container">
          <h2>Feel free to contact me through email,</h2>
          <a
            href="mailto:contact@raalzz.com"
            target="_top"
            rel="nofollow noopener noreferrer"
          >
            contact@raalzz.com
          </a>
          <h3 className="or">OR</h3>
          <div>
            <a
              href="https://twitter.com/Raalzz"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="fa fa-twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/Raalzz"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="fa fa-github"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-sawant-895481109/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="fa fa-linkedin"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.reddit.com/user/Raalzz619"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="fa fa-reddit"
            >
              <FaRedditAlien />
            </a>

            <a
              href="https://www.last.fm/user/Raalzz"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="fa fa-lastfm"
            >
              <FaLastfm />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
