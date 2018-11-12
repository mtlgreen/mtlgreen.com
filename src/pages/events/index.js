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
      <div className="events-page__container">
        <CommonPageHeadTitle titleText={'Our core Green Impact Events'} />
        <div className="events-page__body__container">
          {/* <div className="events-page__intro-informtaion__container">
            Building and hosting inspiring sustainable impact events is at the
            core of what MtlGreen is all about. Check out what we have coming up
            soon or have a look at where we've been before.
          </div> */}
          {upcommingEventsPages.length >= 1 && (
            <div>
              <div className="events-page__section-title__container">
                <div className="events-page__section-title__title">
                  Upcoming Events
                </div>
              </div>
              <div className="events-page__events-card-section__container">
                <EventCardList
                  dataArray={upcommingEventsPages}
                  screenWidth={this.state.screenWidth}
                />
              </div>
            </div>
          )}
          <div className="events-page__what-we-do">
            <div className="events-page__section-title__container">
              <div className="events-page__section-title__title">
                What we make?
              </div>
            </div>
            <p>Here is a snapshot of our past events!</p>
            <ul>
              <li>
                <span>Datathon</span>
                {' - '}
                Our most recent event type addition. Through our datathon
                events, we aim to bring data science professionals and amateurs
                interested in sustainability topics together with environmental
                professionals and advocates with the intention of creating
                innovative data based environmental solutions.
              </li>
              <li>
                <span>Startup Weekends</span>
                {' - '}
                An immersive 52- hour learning session with people interested in
                the environment, to hatch and strategize a start-up idea. We
                hosted 2 Start-up weekends. 2016- Sustainable City, 2018 -
                Eco-Social Impact.
              </li>
              <li>
                <span>Crowd-solving Sesssions</span>
                {' - '}
                Ideation sessions, to help local environmental initiatives solve
                a challenge they are currently facing, with solutions from the
                community. We’ve already organized 3 CrowdSolves - on transport,
                food habits, and the sharing economy!
              </li>
              <li>
                <span>5@7 Networking Sessions</span>
                {' - '}
                Meet passionate and environmentally conscious individuals,
                disrupting their silos.
              </li>
            </ul>
          </div>

          <div className="events-page__section-title__container">
            <div className="events-page__section-title__title">
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
