import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './eventCard.scss'

class EventCard extends Component {
  render() {
    return (
      <Link
        to={this.props.slug}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className="event-card__container">
          <div className="event-card__thumbnail">
            <Img
              sizes={{ ...this.props.thumbnail }}
              style={{
                width: '200px',
                height: '200px',
                verticalAlign: 'center',
              }}
            />
          </div>
          <div className="event-card__content">
            <div className="event-card__title">{this.props.title}</div>
            <div className="event-card__caption">
              {this.props.shortDescription}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default EventCard
