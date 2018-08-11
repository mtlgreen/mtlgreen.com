import React, { Component } from 'react'
import CommonPageHeadTitle from '../../components/CommonPageHeadTitle/CommonPageHeadTitle'
import ImageCardGrid from '../../components/ImageCardGrid/ImageCardGrid'

import './greenThoughts.scss'

class GreenThoughtsPage extends Component {
  render() {
    const allGreenThoughtsPages = this.props.data.allMarkdownRemark.edges

    return (
      <div>
        <CommonPageHeadTitle
          titleText={'Maybe some food for green thoughts?'}
        />
        <div className="green-thoughts-page__body__container">
          <div className="green-thoughts-page__intro-informtaion__outer-container">
            <div className="green-thoughts-page__intro-informtaion__inner-container">
              Feed your passion by exploring our vibrant and growing collection
              of posts exposing what, where, who and how sustainable impact is
              being made today. Further than this, discover how you can act as a
              post contributor to further amplify our collective message.
            </div>
          </div>
          <div className="green-thoughts-page__card-section__container">
            <ImageCardGrid dataArray={allGreenThoughtsPages} />
          </div>
        </div>
      </div>
    )
  }
}

export default GreenThoughtsPage

export const greenThoughtsPageQuery = graphql`
  query GreenThoughtsPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/green-thoughts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            title
            shortDescription
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
