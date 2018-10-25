import React, { Component } from 'react'
import './contactForm.scss'

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-form__container">
        <form
          action="https://formspree.io/gregory.g.denys@gmail.com"
          method="POST"
          className="contact-form__form"
        >
          <label htmlFor="email-address">Your Email Address</label>
          <input
            type="email"
            name="email-address"
            className="contact-form__email-input"
          />
          <label htmlFor="message">Your Message</label>
          <textarea name="message" className="contact-form__text-input" />
          <input
            type="submit"
            value="Send Message"
            className="contact-form__submit-button"
          />
        </form>
      </div>
    )
  }
}

export default ContactForm
