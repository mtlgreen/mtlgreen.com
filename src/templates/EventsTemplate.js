import React, { Component } from 'react'
import Helmet from 'react-helmet'
import CommonPageHeadTitle from '../components/CommonPageHeadTitle/CommonPageHeadTitle'
import Img from 'gatsby-image'

import './eventsTemplate.scss'

class EventsTemplate extends Component {
  constructor() {
    super()
    this.state = {
      headImageWidth: '70vw',
    }
  }

  setHeadImageDimensions = () => {
    if (window.innerWidth <= 1100) {
      this.setState({
        headImageWidth: '100vw',
      })
    } else {
      this.setState({
        headImageWidth: '700px',
      })
    }
  }

  componentDidMount = () => {
    this.setHeadImageDimensions()
    window.addEventListener('resize', this.setHeadImageDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setHeadImageDimensions)
  }

  render() {
    const post = this.props.data.markdownRemark

    const projectImages = this.props.data.markdownRemark.frontmatter.images

    return (
      <div className="events-template__body__container">
        <Img
          style={{
            width: this.state.headImageWidth,
            height: '70vh',
            marginTop: '-15vh',
          }}
          sizes={{
            ...post.frontmatter.thumbnail.childImageSharp.sizes,
            aspectRatio: 1 / 1,
          }}
        />
        <div className="events-template__body__title">
          {post.frontmatter.title}
        </div>

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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        shortDescription

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
