import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"

import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"

const BlogIndex = props => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout location={props.location}>
      <SEO title="Blog" />
      <div id="blog" className="block-start">
        <div className="container">
          <div className="post_list">
            {posts.map(({ node }) => {
              const title = get(node, "frontmatter.title") || node.fields.slug
              return (
                <div
                  className="post_item"
                  key={node.fields.slug}
                  css={{ marginBottom: "5px" }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${
                        node.frontmatter.cover_img.publicURL
                      })`,
                    }}
                    className="post_image"
                  />
                  <div className="blog_ttl_ts">
                    <h2 className="blog_ttl" style={{ marginBottom: "5px" }}>
                      <Link
                        style={{ boxShadow: "none", color: `inherit` }}
                        to={node.fields.slug}
                      >
                        {title}
                      </Link>
                    </h2>
                    <div
                      className="time_stamp"
                      style={{
                        display: `block`,
                        marginBottom: "5px",
                      }}
                    >
                      {node.frontmatter.date}
                    </div>
                  </div>
                  <div className="post_desc">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.spoiler,
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
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
            cover_img {
              publicURL
            }
          }
        }
      }
    }
  }
`
