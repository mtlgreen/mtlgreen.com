import React, { Component } from 'react'
import Link from 'gatsby-link'

import './footer.scss'

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer__outer-container">
          <div className="footer__top-container">
            <div className="footer__information-segment__container">
              <div className="footer__information-segment__title">About Us</div>
              <div className="footer__information-segment__body">
                <Link to={'/about/#mission'} className="footer__link">
                  Mission and Vision
                </Link>
                <br />
                <Link to={'/about/#history'} className="footer__link">
                  History
                </Link>
                <br />
                <Link to={'/about/#team'} className="footer__link">
                  Contributors
                </Link>
                <br />
                <Link to={'/about/#partners'} className="footer__link">
                  Partners
                </Link>
              </div>
            </div>
            <div className="footer__information-segment__container">
              <div className="footer__information-segment__title">
                Get Involved
              </div>
              <div className="footer__information-segment__body">
                <Link to={'/join/'} className="footer__link">
                  Contribute as a team member
                </Link>
                <br />
                <Link to={'/join/'} className="footer__link">
                  Volunteer for an event
                </Link>
                <br />
                <Link to={'/join/'} className="footer__link">
                  Become a partner
                </Link>
                <br />
                <Link to={'/join/'} className="footer__link">
                  Donate
                </Link>
              </div>
            </div>
            <div className="footer__information-segment__container">
              <div className="footer__information-segment__title">
                Contact Us
              </div>
              <div className="footer__information-segment__body">
                <Link to={'/contact/'} className="footer__link">
                  See our Contact Page
                </Link>
                <br />
                <a
                  href="https://www.facebook.com/MtlGreen/"
                  target="_blank"
                  className="footer__link"
                >
                  Check us out on Facebook
                </a>
                <br />
                <a
                  href="https://www.eventbrite.ca/o/mtlgreen-10890205528"
                  target="_blank"
                  className="footer__link"
                >
                  See Eventbrite for our events
                </a>
                <br />
                <a href="mailto:jytiens@mtlgreen.com" className="footer__link">
                  jytiens@mtlgreen.com
                </a>
                <br />
              </div>
            </div>
            <div className="footer__information-segment__container">
              <div className="footer__information-segment__title">Location</div>
              <div className="footer__information-segment__body">
                <div>
                  Modays from 18h - 20h at Evolving Web: <br />
                  300 Rue du Saint-Sacrement #222, Montréal, QC H2Y 1X4
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22364.150228370898!2d-73.6004709!3d45.519765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a59a404ed59%3A0xb7ffdafb199ee794!2sEvolving+Web!5e0!3m2!1sen!2sca!4v1541299496768"
                  className="footer__map"
                  width="150"
                  height="150"
                  frameborder="0"
                />
              </div>
            </div>
            <div className="footer__partners-container" />
            <div className="footer__contact-container" />
            <div className="footer__location-container" />
          </div>
          <div className="footer__bottom-container">MtlGreen &copy; 2018</div>
        </div>
      </div>
    )
  }
}

export default Footer
