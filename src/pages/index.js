import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './homePage.scss'

class HomePage extends Component {
  render() {
    return (
      <div className="home-page__container">
        <div className="home-page__image-mask" />
        <Img
          title="Bikes"
          style={{
            position: 'absolute',
            left: '0',
            top: '80px',
            width: '100%',
            height: '100vh',
            borderBotton: '10px solid black',
            paddingTop: '250px',
            zIndex: '-2',
          }}
          alt="View of a green city"
          sizes={{
            ...this.props.data.backgroundImage1.childImageSharp.sizes,
            aspectRatio: 1 / 1,
          }}
        />
        {/* <Img
          title="Potted Plants"
          style={{
            position: 'absolute',
            left: '0',
            top: '480px',
            width: '100%',
            height: '70%',
            paddingTop: '250px',
            zIndex: '-2',
          }}
          alt="Potted Plants"
          sizes={{
            ...this.props.data.backgroundImage2.childImageSharp.sizes,
            aspectRatio: 1 / 1,
          }}
        />
        <Img
          title="Windows"
          style={{
            position: 'absolute',
            left: '0',
            top: '680px',
            width: '100%',
            height: '300px',
            paddingTop: '0px',
            zIndex: '-2',
          }}
          alt="View of window"
          sizes={{
            ...this.props.data.backgroundImage3.childImageSharp.sizes,
            aspectRatio: 1 / 1,
          }}
        /> */}
        <Img
          title="Team Collaboration"
          style={{
            position: 'absolute',
            left: '0',
            top: '880px',
            width: '100%',
            height: '70%',
            paddingTop: '0px',
            zIndex: '-2',
          }}
          alt="Team Collaboration"
          sizes={{
            ...this.props.data.backgroundImage4.childImageSharp.sizes,
            aspectRatio: 1 / 1,
          }}
        />
        <div className="home-page__main-statement__container">
          <div className="home-page__main-statement">
            This is <span>your</span> city!
          </div>
        </div>
        <div className="home-page__sub-statement__container">
          <div className="home-page__sub-statement">
            Let's make it an awesome <span>green</span> place to live together.
          </div>
        </div>
        <div className="home-page__purpose-intro__main-container">
          <div className="home-page__purpose-intro__header">
            <div className="home-page__purpose-intro__header--left">
              We make <span>impact events</span>
            </div>
            <div className="home-page__purpose-intro__header--center">with</div>
            <div className="home-page__purpose-intro__header--right">You!</div>
          </div>
          <div className="home-page__purpose-intro__body">
            <div className="home-page__purpose-intro__body__title">
              Where to start?
            </div>
            <hr />
            <div className="home-page__purpose-intro__body__text">
              <ul>
                <li>
                  <span>Feel</span> impact by <a href="#">participating</a> in
                  one of our events.
                </li>
                <hr />
                <li>
                  <span>Create</span> impact by <a href="#">joining</a> our team
                  to form, shape, and lead sustainability focused events.
                </li>
                <hr />
                <li>
                  <span>Spread</span> impact by <a href="#">collaborating</a>{' '}
                  with us over bold ideas.
                </li>
                <hr />
                <li>
                  <span>Accelerate</span> impact by <a href="#">funding</a> a
                  meaningful sustainable movement.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home-page__leading-block-1__container">
          {/* <div className="home-page__outlined-text__container"> */}
          <div className="home-page__leading-block-1__title">Who are we?</div>
          <div className="home-page__leading-block-1__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta
            eget tortor at faucibus. Sed vel velit vitae ante consequat
            condimentum. Donec scelerisque lacus ante, ac porta metus pretium
            ut. Proin egestas euismod felis, nec venenatis leo accumsan vel.
            Morbi ac fermentum lacus, vitae blandit urna. Nam ac venenatis
            risus. Ut ac mi placerat, sollicitudin lorem quis, pellentesque
            lorem.
          </div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default HomePage

export const homePageQuery = graphql`
  query HomePageQuery {
    backgroundImage1: file(
      relativePath: { eq: "img/home-page-images/bike-path-lexi-ruskell.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    backgroundImage2: file(
      relativePath: {
        eq: "img/home-page-images/potted-plants-markus-spiske.jpg"
      }
    ) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    backgroundImage3: file(
      relativePath: { eq: "img/home-page-images/windows-nick-hillier.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    backgroundImage4: file(
      relativePath: { eq: "img/home-page-images/collaboration-rawpixel.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
