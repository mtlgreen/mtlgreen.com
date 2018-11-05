import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import SiteMetaInformation from './SiteMetaInformation'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import './mainLayout.scss'
import '../styles/variables.scss'

class MainLayout extends Component {
  render() {
    return (
      <div>
        <SiteMetaInformation
          siteMetadata={this.props.data.siteMetadata.siteMetadata}
        />
        <Header
          logoMtlGreen={this.props.data.logoMtlGreen.childImageSharp.sizes}
          logoMtlGreenInverted={
            this.props.data.logoMtlGreenInverted.childImageSharp.sizes
          }
          iconCircleMenu={this.props.data.iconCircleMenu.childImageSharp.sizes}
          iconCross={this.props.data.iconCross.childImageSharp.sizes}
        />
        <div className="main-layout__container">{this.props.children()}</div>
        <Footer />
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.func,
}

export default MainLayout

export const mainLayoutQuery = graphql`
  query MainLayoutQuery {
    siteMetadata: site {
      siteMetadata {
        title
        url
        description
        author {
          name
        }
      }
    }
    logoMtlGreen: file(relativePath: { eq: "img/logo-mtlgreen.png" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    logoMtlGreenInverted: file(
      relativePath: { eq: "img/logo-mtlgreen-inverted.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    iconCircleMenu: file(relativePath: { eq: "img/icon-circle-menu.png" }) {
      childImageSharp {
        sizes(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    iconCross: file(relativePath: { eq: "img/icon-cross.png" }) {
      childImageSharp {
        sizes(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
