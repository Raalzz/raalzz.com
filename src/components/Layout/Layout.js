import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import Navbar from "./Navbar"
import "../../Styles/Sass/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="theme-toggle">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            Dark mode
          </label>
        )}
      </ThemeToggler>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
