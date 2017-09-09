import React, { Component } from "react"
import Helmet from "react-helmet"
import Landing from "../components/Landing/Landing"
import config from "../../data/SiteConfig"

class LandingPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`About | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <Landing />
      </div>
    )
  }
}

export default LandingPage
