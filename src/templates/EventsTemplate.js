import React, { Component } from 'react'
import Helmet from 'react-helmet'
import CommonPageHeadTitle from '../components/CommonPageHeadTitle/CommonPageHeadTitle'
import Img from 'gatsby-image'
import getFormattedDate from '../utils/getFormattedDate'
import Icon from '@mdi/react'
import { mdiCalendar, mdiCity, mdiEventbrite, mdiFacebookBox } from '@mdi/js'
import ImageCardGrid from '../components/ImageCardGrid/ImageCardGrid'
import Footer from '../components/Footer/Footer'

import './eventsTemplate.scss'

class EventsTemplate extends Component {
  constructor() {
    super()
    this.state = {
      formattedDate: null,
      formattedStartTime: null,
      formattedEndTime: null,
    }
  }

  componentDidMount = () => {
    this.setState({
      formattedDate: getFormattedDate(
        this.props.data.markdownRemark.frontmatter.date
      ),
      formattedStartTime: getFormattedDate(
        this.props.data.markdownRemark.frontmatter.startTime
      ),
      formattedEndTime: getFormattedDate(
        this.props.data.markdownRemark.frontmatter.endTime
      ),
    })
  }

  render() {
    const post = this.props.data.markdownRemark
    const projectImages = post.frontmatter.eventImages
    const date = this.state.formattedDate

    return (
      <div className="events-template__container">
        <Img
          style={{
            width: '100vw',
            maxWidth: '700px',
            height: '70vh',
            marginTop: '80px',
          }}
          sizes={{
            ...post.frontmatter.thumbnail.childImageSharp.sizes,
            aspectRatio: 1 / 1,
          }}
        />
        <div className="events-template__body">
          <div className="events-template__body__info-essentials-group">
            {/* ------------------------- Info Date -------------------------- */}

            <div className="events-template__body__info-essentials">
              <div className="events-template__body__info-icon">
                <Icon path={mdiCalendar} size={1} />
              </div>
              <div className="events-template__body__info-text">
                <div className="events-template__body__date">
                  {date &&
                    date.weekDay +
                      ' ' +
                      date.day +
                      ' ' +
                      date.monthLong +
                      ' ' +
                      date.year}
                </div>
                <div className="events-template__body__time">
                  {this.state.formattedStartTime
                    ? this.state.formattedStartTime.time
                    : null}
                  {' - '}
                  {this.state.formattedEndTime
                    ? this.state.formattedEndTime.time
                    : null}
                </div>
              </div>
            </div>
            <div className="events-template__body__zigzag" />

            {/* ------------------------- Info Address -------------------------- */}

            <div className="events-template__body__info-essentials">
              <div className="events-template__body__info-icon">
                <Icon path={mdiCity} size={1} />
              </div>
              <div className="events-template__body__info-text">
                <div className="events-template__body__address-details">
                  {post.frontmatter.address.addressDetailLevel}
                </div>
                <div className="events-template__body__address">
                  {post.frontmatter.address.addressCityLevel}{' '}
                  {post.frontmatter.address.addressPostalCode}
                </div>
              </div>
            </div>
            <div className="events-template__body__zigzag" />

            {/* ------------------------- Info Buttons -------------------------- */}

            <div className="events-template__body__info-buttons">
              <a
                className="events-template__body__info-button__link"
                href={post.frontmatter.linkEventbrite}
                target="_blank"
              >
                <div className="events-template__body__info-button">
                  <div className="events-template__body__info-button__icon">
                    <Icon path={mdiEventbrite} size={1.5} color={'#fff'} />
                  </div>
                  <div className="events-template__body__info-button__text">
                    Buy Tickets
                  </div>
                </div>
              </a>
              <a
                className="events-template__body__info-button__link"
                href={post.frontmatter.linkFacebook}
                target="_blank"
              >
                <div className="events-template__body__info-button">
                  <div className="events-template__body__info-button__icon">
                    <Icon path={mdiFacebookBox} size={1.5} color={'#fff'} />
                  </div>
                  <div className="events-template__body__info-button__text">
                    Follow the Action
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ------------------------- Title and Article -------------------------- */}

          <div className="events-template__body__title">
            {post.frontmatter.title}
          </div>
          <div className="events-template__body__price">
            {post.frontmatter.price ? `$ ${post.frontmatter.price}` : 'Free'}
          </div>
          <div
            className="events-template__article-excerpt"
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
          <div>
            <h1>{post.frontmatter.partners.map(partner => partner.name)}</h1>
          </div>
        </div>

        {/* ------------------------- Image Grid -------------------------- */}

        <ImageCardGrid onlyShowImage={true} dataArray={projectImages} />
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
        date
        startTime
        endTime
        address {
          addressDetailLevel
          addressCityLevel
          addressPostalCode
        }
        shortDescription
        price
        partners {
          name
          image {
            childImageSharp {
              sizes(maxWidth: 400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        linkEventbrite
        linkFacebook
        eventImages {
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
