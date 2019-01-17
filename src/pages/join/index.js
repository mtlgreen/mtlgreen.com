import React, { Component } from 'react'
import Link from 'gatsby-link'
import CommonPageHeadTitle from '../../components/CommonPageHeadTitle/CommonPageHeadTitle'

import './join.scss'

class JoinPage extends Component {
  render() {
    return (
      <div>
        <CommonPageHeadTitle titleText={'Join the Impact!'} />
        <div className="join-page__body__container">
          <div className="join-page__join-point__container">
            <div className="join-page__join-point__title">
              <h3>
                <span>Participate</span> in one of our events
              </h3>
            </div>
            <hr />
            <div className="join-page__join-point__sub-title">
              See our events{' '}
              <Link
                to={'/events/'}
                className="join-page__join-point__sub-title__link"
              >
                here
              </Link>{' '}
              to participate.
            </div>
            <div>
              <div className="join-page__join-point__body">
                <div className="join-page__join-point__body-left">
                  <ul>
                    <li>
                      Broaden your understanding of sustainable solutions.
                    </li>
                    <li>
                      Discover innovations in the sustainability movement.
                    </li>
                    <li>
                      Meet others who share a passion to see a green future.
                    </li>
                  </ul>
                </div>
                <div className="join-page__join-point__body-right">
                  Our events attract a diversity of participants from the
                  community passionate about sustainability and driven to see a
                  green future.
                </div>
              </div>
            </div>
            <div className="join-page__join-point__title">
              <h3>
                <span>Join</span> our team to form, shape, and lead
                sustainability focused events
              </h3>
            </div>
            <hr />
            <div className="join-page__join-point__sub-title">
              Contact us{' '}
              <Link
                to={'/events/'}
                className="join-page__join-point__sub-title__link"
              >
                here
              </Link>{' '}
              to join our team.
            </div>
            <div className="join-page__join-point__body">
              <div className="join-page__join-point__body-left">
                <ul>
                  <li>
                    Contribute in an entrepreneurial way amongst an action
                    oriented team.
                  </li>
                  <li>
                    Gain experience to move your career in a new direction.
                  </li>
                  <li>
                    Form stronger bonds with amazing people the green community.
                  </li>
                </ul>
              </div>

              <div className="join-page__join-point__body-right">
                As an open, collaborative, activist led organisation, MtlGreen
                is an outlet through which you can gain valuable experiences
                while achieving impact.
              </div>
            </div>
            <div className="join-page__join-point__title">
              <h3>
                <span>Partner</span> with us over bold ideas
              </h3>
            </div>
            <hr />
            <div className="join-page__join-point__sub-title">
              Contact us{' '}
              <Link
                to={'/events/'}
                className="join-page__join-point__sub-title__link"
              >
                here
              </Link>{' '}
              to partner up.
            </div>
            <div className="join-page__join-point__body">
              <div className="join-page__join-point__body-left">
                <ul>
                  <li>Amplify your message while amplifying impact.</li>
                  <li>
                    Grow your organisations network around a progressive,
                    innovative community.
                  </li>
                  <li>Benefit from knowledge-transfer and cross-polination.</li>
                </ul>
              </div>
              <div className="join-page__join-point__body-right">
                <div>
                  We work together with you to bring your sustainable vision
                  together with the community through our events, whether you
                  want to grow your startup, drive your sustainable business
                  goals, or spread the reach of the message of your academic or
                  civic organisation.
                </div>
              </div>
            </div>
            <div className="join-page__join-point__title">
              <h3>
                <span>Fund</span> a meaningful sustainable movement.
              </h3>
            </div>
            <hr />
            <div className="join-page__join-point__sub-title">
              Contact us{' '}
              <Link
                to={'/events/'}
                className="join-page__join-point__sub-title__link"
              >
                here
              </Link>{' '}
              to sponsor an event.
            </div>
            <div className="join-page__join-point__body">
              <div className="join-page__join-point__body-left">
                <ul>
                  <li>
                    Be seen as a driving force behind green impact in the
                    community.
                  </li>
                  <li>
                    Widen the scope of your organisations network amongst the
                    green community and attract talent.
                  </li>
                  <li>
                    Attract a community of conscientious consumers towards your
                    product.
                  </li>
                </ul>
              </div>
              <div className="join-page__join-point__body-right">
                Sponsorship is a driving force behind many of our events. When
                you work with us as a sponsor, you send the community a message
                of your dedication to progressive sustainable impact.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinPage
