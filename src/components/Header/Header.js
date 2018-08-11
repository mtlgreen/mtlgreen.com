import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Navigation from '../Navigation/Navigation'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Img from 'gatsby-image'

import './header.scss'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      menuShown: false,
      headerBackgroundShown: false,
      headerBackgroundColor: 'white',
      logoToShow: null,
    }
  }

  // ============================ REVEALING MENU =============================

  toggleMenu = () => {
    this.setState({
      menuShown: !this.state.menuShown,
    })
  }

  // ============================ REVEALING DYNAMIC HEADER =============================

  revealDynamicHeaderOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({
        headerBackgroundColor: 'rgba(141, 202, 108, 1)',
        headerBackgroundShown: true,
        logoToShow: this.props.logoMtlGreenInverted,
      })
    } else {
      this.setState({
        headerBackgroundColor: 'white',
        headerBackgroundShown: false,
        logoToShow: this.props.logoMtlGreen,
      })
    }
  }

  // ============================ LIFECYCLE METHODS =============================

  componentWillMount() {
    this.setState({
      logoToShow: this.props.logoMtlGreen,
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.revealDynamicHeaderOnScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.revealDynamicHeaderOnScroll)
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <header
          className="header__outer-container header--animation"
          style={{
            backgroundColor: this.state.headerBackgroundColor,
          }}
        >
          {/* ============================ SECTION - HEADER LEFT ============================= */}

          <div
            className="header__left-container"
            onClick={this.state.menuShown ? this.toggleMenu : null}
          >
            <Link to="/">
              <Img
                className={'logo-icon'}
                sizes={{
                  ...this.state.logoToShow,
                  aspectRatio: 1 / 1,
                }}
              />
            </Link>
          </div>

          {/*} ============================ SECTION - HEADER CENTER ============================= */}

          <div className="header__center-container">
            <Navigation
              headerBackgroundShown={this.state.headerBackgroundShown}
            />
          </div>

          {/* ============================ SECTION - HEADER RIGHT ============================= */}

          <div className="header__right-container" onClick={this.toggleMenu}>
            {this.state.menuShown ? (
              <Img
                className={
                  this.state.headerBackgroundShown
                    ? 'menu-icon--inverted'
                    : 'menu-icon'
                }
                sizes={{
                  ...this.props.iconCross,
                  aspectRatio: 1 / 1,
                }}
              />
            ) : (
              <Img
                className={
                  this.state.headerBackgroundShown
                    ? 'menu-icon--inverted'
                    : 'menu-icon'
                }
                sizes={{
                  ...this.props.iconCircleMenu,
                  aspectRatio: 1 / 1,
                }}
              />
            )}
          </div>

          {/* ============================ MENU ============================= */}

          {this.state.menuShown && <HeaderMenu toggleMenu={this.toggleMenu} />}
        </header>
      </div>
    )
  }
}

export default Header
