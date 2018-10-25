import React, { Component } from 'react'
import Img from 'gatsby-image'

import './eventCardSmall.scss'

class EventCardSmall extends Component {
  render() {
    return (
      <div>
        <div className="event-card-small__container">
          <div className="event-card-small__image__container">
            <Img
              sizes={{ ...this.props.thumbnail }}
              style={{
                maxHeight: '350px',
                verticalAlign: 'center',
                overflow: 'hidden',
              }}
            />
          </div>

          <div className="event-card-small__body">
            <div className="event-card-small__body__date">
              {this.props.date ? this.props.date.month : null}
              <div style={{ fontSize: '28px', textAlign: 'center' }}>
                {this.props.date ? this.props.date.day : null}
              </div>
              {this.props.date ? this.props.date.year : null}
            </div>
            <div className="event-card-small__body__text">
              <div className="event-card-small__body__title">
                {this.props.title}
              </div>
              <div className="event-card-small__body__description">
                {this.props.shortDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventCardSmall
