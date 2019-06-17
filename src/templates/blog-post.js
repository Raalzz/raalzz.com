import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext
  console.log(props)

  return (
    <Layout location={props.location}>
      <div id="post" className="block-start">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <div className="container">
          <h1 className="post_title">{post.frontmatter.title}</h1>
          <p
            className="time_stamp"
            style={{
              display: "block",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            {post.frontmatter.date}
          </p>
          <div className="ind_img">
            <img
              src={post.frontmatter.cover_img.publicURL}
              alt={post.frontmatter.title}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={{ marginBottom: "5px" }} />

          <ul
            style={{
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              listStyle: "none",
              padding: 0,
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        cover_img {
          publicURL
        }
        random
      }
      fields {
        slug
      }
    }
  }
`
