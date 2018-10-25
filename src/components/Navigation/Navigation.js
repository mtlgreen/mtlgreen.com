import React, { Component } from 'react'
import Link from 'gatsby-link'

import './Navigation.scss'

class Navigation extends Component {
  render() {
    const NavItem = ({ title, to }) => (
      <Link
        to={to}
        className={
          this.props.headerBackgroundShown
            ? 'navigation__link--backlit'
            : 'navigation__link'
        }
      >
        {title}
      </Link>
    )

    return (
      <div className="navigation__list">
        <NavItem to="/about/" title="About" />
        <NavItem to="/events/" title="Events" />
        <NavItem to="/green-thoughts/" title="Green Thoughts" />
        <NavItem to="/join/" title="Get Involved" />
        <NavItem to="/contact/" title="Contact" />
      </div>
    )
  }
}

export default Navigation
