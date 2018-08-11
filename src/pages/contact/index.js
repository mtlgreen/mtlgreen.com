import React, { Component } from 'react'
import CommonPageHeadTitle from '../../components/CommonPageHeadTitle/CommonPageHeadTitle'

import './contact.scss'

class ContactPage extends Component {
  render() {
    return (
      <div>
        <CommonPageHeadTitle titleText={'Get in contact!'} />
        <div className="contact-page__body__container">Contact</div>
      </div>
    )
  }
}

export default ContactPage
