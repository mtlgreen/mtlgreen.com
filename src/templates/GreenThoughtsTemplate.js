import React, { Component } from 'react'
import Helmet from 'react-helmet'
import CommonPageHeadTitle from '../components/CommonPageHeadTitle/CommonPageHeadTitle'
import Img from 'gatsby-image'
import getFormattedDate from '../utils/getFormattedDate'

import './greenThoughtsTemplate.scss'

class GreenThoughtsTemplate extends Component {
  constructor() {
    super()
    this.state = {
      formattedDate: null,
    }
  }

  componentDidMount = () => {
    this.setState({
      formattedDate: getFormattedDate(
        this.props.data.markdownRemark.frontmatter.date
      ),
    })
  }

  render() {
    const post = this.props.data.markdownRemark
    const projectImages =
      this.props.data.markdownRemark.frontmatter.extraImages || []
    const date = this.state.formattedDate

    return (
      <div className="green-thoughts-template__container">
        <Img
          style={{
            width: '100vw',
            maxWidth: '700px',
            height: '65vh',
            marginTop: '80px',
          }}
          sizes={{
            ...post.frontmatter.thumbnail.childImageSharp.sizes,
            aspectRatio: 1 / 1,
          }}
        />
        <div className="green-thoughts-template__body">
          <div className="green-thoughts-template__article-title">
            {post.frontmatter.title}
          </div>
          <div className="green-thoughts-template__article-description">
            {post.frontmatter.shortDescription}
          </div>
          <div className="green-thoughts-template__author-info__container">
            <Img
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '100%',
              }}
              sizes={{
                ...post.frontmatter.authorImage.childImageSharp.sizes,
                aspectRatio: 1 / 1,
              }}
            />
            <div className="green-thoughts-template__author-name-date">
              <div>{post.frontmatter.authorName}</div>
              <div>
                {date &&
                  date.weekDay +
                    ' ' +
                    date.day +
                    ' ' +
                    date.monthLong +
                    ' ' +
                    date.year}
              </div>
            </div>
          </div>
          <div
            className="green-thoughts-template__article-excerpt__container"
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
        </div>
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
        shortDescription
        authorImage {
          childImageSharp {
            sizes(maxWidth: 200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        authorName
        date
        extraImages {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
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
