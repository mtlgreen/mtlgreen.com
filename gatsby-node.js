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

// const path = require(`path`)

// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
//   const { createNodeField } = boundActionCreators
//   if (node.internal.type === `MarkdownRemark`) {
//     // const fileNode = getNode(node.parent)
//     // console.log(`\n`, fileNode.relativePath)

//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: `green-thoughts`,
//     })

//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })

//     // const eventsSlug = createFilePath({
//     //   node,
//     //   getNode,
//     //   basePath: `events`,
//     // })

//     // createNodeField({
//     //   node,
//     //   name: `eventsSlug`,
//     //   value: eventsSlug,
//     // })
//   }
// }

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         console.log('OUTPOUT PATH ', node)
//         // if (node.fields.greenThoughtsSlug.includes('green-thoughts')) {
//         console.log('Creating green t page ', node.fields.slug)
//         createPage({
//           path: node.fields.slug,
//           component: path.resolve(`./src/templates/GreenThoughtsTemplate.js`),
//           context: {
//             slug: node.fields.slug,
//           },
//         })
//         // }
//         // if (node.fields.eventsSlug.includes('pages/events')) {
//         //   console.log('Creating event page ', node.fields.eventsSlug)
//         //   createPage({
//         //     path: node.fields.eventsSlug,
//         //     component: path.resolve(`./src/templates/EventsTemplate.js`),
//         //     context: {
//         //       slug: node.fields.eventsSlug,
//         //     },
//         //   })
//         // }
//       })
//       resolve()
//     })
//   })
// }
