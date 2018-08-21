import React, { Component } from 'react'
import EventCard from '../EventCard/EventCard'

import './eventCardList.scss'

class EventCardList extends Component {
  renderEventCard = node => {
    return (
      <EventCard
        thumbnail={node.frontmatter.thumbnail.childImageSharp.sizes}
        title={node.frontmatter.title}
        slug={node.fields.slug}
        date={node.frontmatter.date}
        shortDescription={node.frontmatter.shortDescription}
        screenWidth={this.props.screenWidth}
      />
    )
  }

  render() {
    let dataArray = this.props.dataArray
    return (
      <div>
        {dataArray.map(({ node }, index) => {
          return (
            <div key={index} className="event-card-list__container">
              {this.renderEventCard(node)}
            </div>
          )
        })}
      </div>
    )
  }
}

export default EventCardList
