import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './homePage.scss'

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      slideshowImages: [],
      currentImage: null,
      currentImageIndex: 0,
    }
  }

  setCurrentImage = () => {
    setTimeout(() => {
      if (
        this.state.currentImageIndex ===
        this.state.slideshowImages.length - 1
      ) {
        this.setState({
          currentImageIndex: 0,
        })
      } else {
        this.setState({
          currentImageIndex: this.state.currentImageIndex + 1,
        })
      }
      this.setState({
        currentImage: this.state.slideshowImages[this.state.currentImageIndex],
      })

      this.setCurrentImage()
    }, 2000)
  }

  componentDidMount = () => {
    this.setState({
      slideshowImages: [
        this.props.data.pottedPlants,
        this.props.data.backgroundImage,
        this.props.data.desktop,
      ],
      currentImage: this.props.data.pottedPlants,
      curretImageIndex: 0,
    })
    this.setCurrentImage()
  }

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
            height: '90vh',
            borderBotton: '10px solid black',
            paddingTop: '250px',
            zIndex: '0',
          }}
          alt="View of a green city"
          sizes={{
            ...this.props.data.backgroundImage.childImageSharp.sizes,
            aspectRatio: 1 / 1,
          }}
        />
        {/* <Img
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
        /> */}
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
              Who are we?
            </div>
            <div className="home-page__purpose-intro__body__text">
              We are an open citizen collective on a mission to:
            </div>

            <div className="home-page__purpose-intro__spacer" />
            <div className="home-page__purpose-intro__body__title">
              How we are doing it?
            </div>

            <div className="home-page__purpose-intro__body__text">
              We empower local eco-projects and engage citizens through
              interactive workshops and sustainability consulting.
            </div>
            <div className="home-page__purpose-intro__body__foot-images">
              <Img
                title="Desktop"
                style={{
                  width: '50%',
                  float: 'right',
                }}
                alt="Desktop"
                sizes={{
                  ...this.props.data.desktop.childImageSharp.sizes,
                  aspectRatio: 1 / 1,
                }}
              />
              <Img
                title="Collaboration"
                style={{
                  width: '50%',
                  float: 'left',
                }}
                alt="Collaboration"
                sizes={{
                  ...this.props.data.collaboration.childImageSharp.sizes,
                  aspectRatio: 1 / 1,
                }}
              />
            </div>
          </div>
        </div>

        {/* Why - Impact Points */}
        <div className="home-page__impact-points__container">
          <div className="home-page__impact-points__point-section">
            <Img
              title="Potted Plants"
              style={{
                width: '150px',
                borderRadius: '100%',
                border: '3px solid #ff4e65',
              }}
              alt="Potted Plants"
              sizes={{
                ...this.props.data.pottedPlants.childImageSharp.sizes,
                aspectRatio: 1 / 1,
              }}
            />
            <div className="home-page__impact-points__point-section__number">
              1.
            </div>
            <div className="home-page__impact-points__point-section__text">
              Greenify Montreal and other cities around the world,
            </div>
          </div>
          <div className="home-page__impact-points__point-section">
            <Img
              title="Smoke Stacks"
              style={{
                width: '150px',
                borderRadius: '100%',
                border: '3px solid #ff4e65',
              }}
              alt="Smoke Stacks"
              sizes={{
                ...this.props.data.smokeStacks.childImageSharp.sizes,
                aspectRatio: 1 / 1,
              }}
            />
            <div className="home-page__impact-points__point-section__number">
              2.
            </div>
            <div className="home-page__impact-points__point-section__text">
              Reduce our dependence on fossil fuels,
            </div>
          </div>
          <div className="home-page__impact-points__point-section">
            <Img
              title="Seeds in Hands"
              style={{
                width: '150px',
                borderRadius: '100%',
                border: '3px solid #ff4e65',
              }}
              alt="Seeds in Hands"
              sizes={{
                ...this.props.data.seedsInHands.childImageSharp.sizes,
                aspectRatio: 1 / 1,
              }}
            />
            <div className="home-page__impact-points__point-section__number">
              3.
            </div>
            <div className="home-page__impact-points__point-section__text">
              Create a sustainable future.
            </div>
          </div>
        </div>

        <div className="home-page__leading-block-1__container">
          {/* <div className="home-page__outlined-text__container"> */}
          <div className="home-page__purpose-intro__body">
            <div className="home-page__purpose-intro__body__title">
              Where to start?
            </div>
            <hr />
            <div className="home-page__purpose-intro__body__text">
              <ul>
                <li>
                  <span>Feel</span> impact by{' '}
                  <a href="/join/#join-participate">participating</a> in one of
                  our events.
                </li>
                <hr />
                <li>
                  <span>Create</span> impact by{' '}
                  <a href="/join/#join-team">joining</a> our team to form,
                  shape, and lead sustainability focused events.
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
          {/* </div> */}
        </div>
        <div className="home-page__slideshow__container">
          {this.state.currentImage && (
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={0}
              transitionLeaveTimeout={0}
            >
              <Img
                title="Slideshow"
                style={{
                  width: '100%',
                  animation: 'fade-animation 2s infinite',
                }}
                alt="Slideshow"
                sizes={{
                  ...this.state.currentImage.childImageSharp.sizes,
                  aspectRatio: 1 / 1,
                }}
              />
            </CSSTransitionGroup>
          )}
        </div>
      </div>
    )
  }
}

export default HomePage

export const homePageQuery = graphql`
  query HomePageQuery {
    backgroundImage: file(
      relativePath: { eq: "img/home-page-images/bike-path-lexi-ruskell.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    pottedPlants: file(
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
    seedsInHands: file(
      relativePath: {
        eq: "img/home-page-images/seeds-in-hands-markus-spiske.jpg"
      }
    ) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    smokeStacks: file(
      relativePath: {
        eq: "img/home-page-images/smoke-stacks-thomas-hafeneth.jpg"
      }
    ) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    desktop: file(
      relativePath: { eq: "img/home-page-images/desktop-rawpixel.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    collaboration: file(
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
