import React, { Component } from 'react'
import Img from 'gatsby-image'

import './eventCardLarge.scss'

class EventCardLarge extends Component {
  render() {
    return (
      <div className="event-card-large__container">
        <Img
          sizes={{ ...this.props.thumbnail }}
          style={{
            width: '200px',
            height: '200px',
            verticalAlign: 'center',
            overflow: 'hidden',
          }}
        />
        <div className="event-card-large__content">
          <div className="event-card-large__header__container">
            <div className="event-card-large__header__title">
              {this.props.title}
            </div>
            <div className="event-card-large__header__date">
              {this.props.date ? this.props.date.day : null}{' '}
              {this.props.date ? this.props.date.month : null}{' '}
              {this.props.date ? this.props.date.year : null}
            </div>
          </div>
          <div className="event-card-large__caption">
            {this.props.shortDescription}
          </div>
        </div>
      </div>
    )
  }
}

export default EventCardLarge
