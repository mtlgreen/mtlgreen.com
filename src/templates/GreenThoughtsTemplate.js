import React, { Component } from 'react'
import Helmet from 'react-helmet'
import CommonPageHeadTitle from '../components/CommonPageHeadTitle/CommonPageHeadTitle'
import Img from 'gatsby-image'

import './greenThoughtsTemplate.scss'

class GreenThoughtsTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const projectImages = this.props.data.markdownRemark.frontmatter.images

    return (
      <div className="green-thoughts-template__body__container">
        <Img
          style={{
            width: '100vw',
            height: '65vh',
          }}
          sizes={{
            ...post.frontmatter.thumbnail.childImageSharp.sizes,
            aspectRatio: 1 / 1,
          }}
        />
        <div className="green-thoughts-template__article-title">
          {post.frontmatter.title}
        </div>
        <div
          className="green-thoughts-template__article-excerpt__container"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </div>
    )
  }
}

export default GreenThoughtsTemplate

export const greenThoughtsTemplateQuery = graphql`
  query GreenThoughtsTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        # images {
        #   childImageSharp {
        #     sizes(maxWidth: 1000) {
        #       ...GatsbyImageSharpSizes
        #     }
        #   }
        # }
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
