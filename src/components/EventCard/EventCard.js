import React, { Component } from 'react'
import Link from 'gatsby-link'

import EventCardLarge from './EventCardLarge'
import EventCardSmall from './EventCardSmall'
import getFormattedDate from '../../utils/getFormattedDate'

class EventCard extends Component {
  constructor() {
    super()
    this.state = {
      formattedDate: null,
    }
  }

  componentDidMount = () => {
    this.setState({
      formattedDate: getFormattedDate(this.props.date),
    })
  }

  render() {
    const { formattedDate } = this.state
    const { thumbnail, title, shortDescription, screenWidth } = this.props

    return (
      <Link
        to={this.props.slug}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        {/* Case: Large Screen */}
        {screenWidth >= 600 && (
          <EventCardLarge
            date={formattedDate}
            thumbnail={thumbnail}
            title={title}
            shortDescription={shortDescription}
          />
        )}
        {/* Case: Small Screen */}
        {screenWidth < 600 && (
          <EventCardSmall
            date={formattedDate}
            thumbnail={thumbnail}
            title={title}
            shortDescription={shortDescription}
          />
        )}
      </Link>
    )
  }
}

export default EventCard
