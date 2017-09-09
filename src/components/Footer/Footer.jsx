import React, { Component } from "react"
import Button from "react-md/lib/Buttons"
import Link from "gatsby-link"
import UserLinks from "../UserLinks/UserLinks"
import config from "../../../data/SiteConfig"
import "./Footer.scss"

class Footer extends Component {
  render() {
    const url = config.siteRss
    const { userLinks } = this.props
    const copyright = config.copyright
    if (!copyright) {
      return null
    }
    return (
      <footer className="footer">
      </footer>
    )
  }
}

export default Footer
