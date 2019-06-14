import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"

const BlogIndex = props => {
  console.log(props)
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout location={props.location}>
      <SEO title="Blog" />
      {posts.map(({ node }) => {
        const title = get(node, "frontmatter.title") || node.fields.slug
        return (
          <div key={node.fields.slug} css={{ marginBottom: "5px" }}>
            <h2 style={{ marginBottom: "5px" }}>
              <Link
                style={{ boxShadow: "none", color: `inherit` }}
                to={node.fields.slug}
              >
                {title}
              </Link>
            </h2>
            <div
              style={{
                display: `block`,
                marginBottom: "5px",
              }}
            >
              {node.frontmatter.date}
            </div>
            <p dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }} />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`
