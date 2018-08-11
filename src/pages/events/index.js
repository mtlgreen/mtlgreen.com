import React, { Component } from 'react'
import CommonPageHeadTitle from '../../components/CommonPageHeadTitle/CommonPageHeadTitle'

import './events.scss'
import EventCardList from '../../components/EventCardList/EventCardList'

class EventsPage extends Component {
  render() {
    const allEventsPages = this.props.data.allMarkdownRemark.edges

    return (
      <div>
        <CommonPageHeadTitle titleText={'Our core Green Impact Events'} />
        <div className="events-page__body__container">
          <div className="events-page__intro-informtaion__outer-container">
            <div className="events-page__intro-informtaion__inner-container">
              Feed your passion by exploring our vibrant and growing collection
              of posts exposing what, where, who and how sustainable impact is
              being made today. Further than this, discover how you can act as a
              post contributor to further amplify our collective message.
            </div>
          </div>
          <div className="events-page__events-card-section__container">
            <EventCardList dataArray={allEventsPages} />
          </div>
        </div>
      </div>
    )
  }
}

export default EventsPage

export const eventsPageQuery = graphql`
  query EventsPageQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/events/" } }) {
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
