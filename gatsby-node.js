const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const greenThoughtsSlug = createFilePath({
      node,
      getNode,
      basePath: `green-thoughts`,
    })

    createNodeField({
      node,
      name: `slug`,
      value: greenThoughtsSlug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug.includes('pages/events')) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/EventsTemplate.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        } else if (node.fields.slug.includes('pages/green-thoughts')) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/GreenThoughtsTemplate.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        }
      })
      resolve()
    })
  })
}
