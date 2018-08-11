import React, { Component } from 'react'
import Link from 'gatsby-link'

import './headerMenu.scss'

class HeaderMenu extends Component {
  render() {
    return (
      <div className="header-menu__container" onClick={this.props.toggleMenu}>
        <Link to="/about/" className="header-menu__item">
          <div>About</div>
        </Link>
        <Link to="/events/" className="header-menu__item">
          <div>Events</div>
        </Link>
        <Link to="/green-thoughts/" className="header-menu__item">
          <div>Green Thoughts</div>
        </Link>
        <Link to="/join/" className="header-menu__item">
          <div>Join</div>
        </Link>
      </div>
    )
  }
}

export default HeaderMenu
