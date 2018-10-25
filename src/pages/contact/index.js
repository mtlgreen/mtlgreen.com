import React, { Component } from 'react'
import CommonPageHeadTitle from '../../components/CommonPageHeadTitle/CommonPageHeadTitle'
import ContactForm from '../../components/ContactForm/ContactForm'
import Img from 'gatsby-image'
import Icon from '@mdi/react'
import {
  mdiCalendar,
  mdiCity,
  mdiEventbrite,
  mdiFacebookBox,
  mdiLinkedinBox,
  mdiInstagram,
  mdiEmail,
} from '@mdi/js'

import './contact.scss'

class ContactPage extends Component {
  render() {
    return (
      <div>
        <CommonPageHeadTitle titleText={'Get in contact!'} />
        <div className="contact-page__body__container">
          <div className="contact-page__icons__container">
            <a href="https://facebook.com/mtlgreen" target="_blank">
              <div className="contact-page__icon">
                <Icon path={mdiFacebookBox} size={1} color={'#fff'} />
              </div>
            </a>
            <a
              href="https://www.eventbrite.ca/d/canada--montreal/events/"
              target="_blank"
            >
              <div className="contact-page__icon">
                <Icon path={mdiEventbrite} size={1} color={'#fff'} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/mtlgreen/"
              target="_blank"
            >
              <div className="contact-page__icon">
                <Icon path={mdiLinkedinBox} size={1} color={'#fff'} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/explore/tags/mtlgreen/"
              target="_blank"
            >
              <div className="contact-page__icon">
                <Icon path={mdiInstagram} size={1} color={'#fff'} />
              </div>
            </a>
            <a href="mailto: jytiens@mtlgreen.com">
              <div className="contact-page__icon">
                <Icon path={mdiEmail} size={1} color={'#fff'} />
              </div>
            </a>
          </div>
          <div className="contact-page__text">
            <p>
              Feeling inspired? Want to get involved? Or just want to send some
              thoughts our way? Get in touch with us through one of the services
              we use shown above or send us a message below. We will be thrilled
              to hear from you and sure to get back to you soon!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default ContactPage
