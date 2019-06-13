import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ meta, image, title, description, slug }) {
  const { site } = useStaticQuery(
    graphql`
      query GetSiteMetadata {
        site {
          siteMetadata {
            title
            author
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const { siteMetadata } = site
  const metaDescription = description || siteMetadata.description
  const metaImage = image ? `${siteMetadata.siteUrl}/${image}` : null
  const url = `${siteMetadata.siteUrl}${slug}`

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      {...(title
        ? {
            titleTemplate: `%s — ${siteMetadata.title}`,
            title,
          }
        : {
            title: `${siteMetadata.title} — Blog by Rahul Sawant`,
          })}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:title",
          content: title || siteMetadata.title,
        },
        {
          name: "og:description",
          content: metaDescription,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: siteMetadata.social.twitter,
        },
        {
          name: "twitter:title",
          content: title || siteMetadata.title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: metaImage,
                },
                {
                  name: "twitter:image",
                  content: metaImage,
                },
              ]
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
