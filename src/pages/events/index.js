import React, { Component } from 'react'
import CommonPageHeadTitle from '../../components/CommonPageHeadTitle/CommonPageHeadTitle'

import './events.scss'
import EventCardList from '../../components/EventCardList/EventCardList'

class EventsPage extends Component {
  constructor() {
    super()
    this.state = {
      screenWidth: null,
    }
  }

  getScreenDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
    })
  }

  componentDidMount = () => {
    this.getScreenDimensions()
    window.addEventListener('resize', this.getScreenDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.getScreenDimensions)
  }

  render() {
    const allEventsPages = this.props.data.allMarkdownRemark.edges
    const previousEventsPages = []
    const upcommingEventsPages = []

    allEventsPages.forEach(({ node }) => {
      if (new Date(node.frontmatter.date) < Date.now() - 63200000) {
        previousEventsPages.push({ node })
      } else {
        upcommingEventsPages.push({ node })
      }
    })

    return (
      <div>
        <CommonPageHeadTitle titleText={'Our core Green Impact Events'} />
        <div className="events-page__body__container">
          <div className="events-page__intro-informtaion__container">
            Building and hosting inspiring sustainable impact events is at the
            core of what MtlGreen is all about. Check out what we have coming up
            soon or have a look at where we've been before.
          </div>
          <div className="events-page__upcoming-events__container">
            <div className="events-page__upcoming-events__title">
              Upcoming Events
            </div>
          </div>
          <div className="events-page__events-card-section__container">
            <EventCardList
              dataArray={upcommingEventsPages}
              screenWidth={this.state.screenWidth}
            />
          </div>
          <div className="events-page__previous-events__container">
            <div className="events-page__previous-events__title">
              Previous Events
            </div>
          </div>
          <div className="events-page__events-card-section__container">
            <EventCardList
              dataArray={previousEventsPages}
              screenWidth={this.state.screenWidth}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EventsPage

export const eventsPageQuery = graphql`
  query EventsPageQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/events/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
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
