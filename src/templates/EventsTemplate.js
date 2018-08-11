import React, { Component } from 'react'
import Helmet from 'react-helmet'
import CommonPageHeadTitle from '../components/CommonPageHeadTitle/CommonPageHeadTitle'
import Img from 'gatsby-image'

import './eventsTemplate.scss'

class EventsTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const projectImages = this.props.data.markdownRemark.frontmatter.images

    return (
      <div className="events-template__body__container">
        <div>EVENTS============</div>
        <Img
          className="events-template__head__image"
          sizes={{ ...post.frontmatter.thumbnail.childImageSharp.sizes }}
        />
        <div
          className="events-template__article-excerpt__container"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </div>
    )
  }
}

export default EventsTemplate

export const eventsTemplateQuery = graphql`
  query EventsTemplateQuery($slug: String!) {
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
            sizes(maxWidth: 400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
