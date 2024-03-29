module.exports = {
  siteMetadata: {
    title: `Raalzz`,
    author: `Rahul Sawant`,
    siteUrl: `https://raalzz.com`,
    description: `I have started writing about React, React Native, GraphQL, aws and some random stuff`,
    social: {
      twitter: `@Raalzz`,
    },
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `÷`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-143309507-1`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.siteUrl
                const postText = `
                  <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at raalzz.com. You can read it online by <a href="${siteUrl +
                    edge.node.fields.slug}">clicking here</a>.)</div>
                `
                let html = edge.node.html
                // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.spoiler,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": html + postText }],
                })
              })
            },
            query: `
                {
                  allMarkdownRemark(
                    limit: 1000,
                    sort: { order: DESC, fields: [frontmatter___date] }
                  ) {
                    edges {
                      node {
                        excerpt(pruneLength: 250)
                        html
                        fields {
                          slug
                        }
                        frontmatter {
                          title
                          date
                          spoiler
                        }
                      }
                    }
                  }
                }
              `,
            output: "/rss.xml",
            title: "Rahul Sawant's Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raalzz`,
        short_name: `Raalzz`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F47560`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        theme_color_in_head: false,
      },
    },
  ],
}
