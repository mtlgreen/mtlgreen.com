import React, { Component } from 'react'
import './CommonPageHeadTitle.scss'

class CommonPageHeadTitle extends Component {
  render() {
    return (
      <div className="common-page__head-title__container">
        <div className="common-page__head-title__intro-title">
          {this.props.titleText}
        </div>
      </div>
    )
  }
}

export default CommonPageHeadTitle
