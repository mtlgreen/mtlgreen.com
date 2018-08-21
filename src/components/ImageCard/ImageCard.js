import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './imageCard.scss'

class ImageCard extends Component {
  render() {
    return (
      <Link
        to={this.props.slug}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div>
          <div className="image-card__container">
            <div className="image-card__image__container">
              <Img sizes={{ ...this.props.thumbnail }} />
            </div>

            <div className="image-card__text">
              <div className="image-card__text__title">{this.props.title}</div>
              <div className="image-card__text__description">
                {this.props.shortDescription}
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default ImageCard
