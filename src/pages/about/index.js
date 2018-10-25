import React, { Component } from 'react'
import CommonPageHeadTitle from '../../components/CommonPageHeadTitle/CommonPageHeadTitle'
import * as aboutContent from '../../content/about/aboutBulkContent'

import './about.scss'

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page__body__container">
        <CommonPageHeadTitle titleText={'What are we all about?'} />
        {/* MISSION VISION Background */}
        <section className="about-page__section about-page__section-parallax about-page__mission-vision__background" />
        {/* MISSION VISION Text */}
        <section className="about-page__section about-page__section-static">
          <div className="about-page__mission-vision__container">
            <div className="about-page__mission-vision__title">
              Mission and Vision
            </div>
            <div className="about-page__mission-vision__text">
              {aboutContent.missionVisionText}
            </div>
          </div>
        </section>
        {/* MAIN ACTIVITIES Background */}
        <section className="about-page__section about-page__section-parallax about-page__main-activities__background">
          <div className="about-page__quote__container">
            <div>
              <span className="about-page__quote__quotation-mark">
                " &nbsp;
              </span>
              Sustainability is no longer about doing less harm. It's about
              doing more good.
              <span className="about-page__quote__quotation-mark">
                &nbsp; "
              </span>
            </div>
            <div className="about-page__quote__author">- Jochen Zeitz</div>
          </div>
        </section>
        {/* MAIN ACTIVITIES Text */}
        <section className="about-page__section about-page__section-static">
          <div className="about-page__main-activities__container">
            <div className="about-page__main-activities__title">
              Main Activities
            </div>
            <div className="about-page__main-activities__text">
              {aboutContent.mainActivitiesText}
            </div>
          </div>
        </section>
        {/* OBJECTIVES Background */}
        <section className="about-page__section about-page__section-parallax about-page__history__background">
          <div className="about-page__quote__container">
            <div>
              <span className="about-page__quote__quotation-mark">
                " &nbsp;
              </span>
              Alone we can do so little; together we can do so much.
              <span className="about-page__quote__quotation-mark">
                &nbsp; "
              </span>
            </div>
            <div className="about-page__quote__author">- Helen Keller</div>
          </div>
        </section>
        {/* HISTORY Text */}
        <section className="about-page__section about-page__section-static">
          <div className="about-page__history__container">
            <div className="about-page__history__title">History</div>
            <div className="about-page__history__text">
              {aboutContent.historyText}
            </div>
          </div>
        </section>
        {/* TEAM Background */}
        <section className="about-page__section about-page__section-parallax about-page__team__background">
          <div className="about-page__quote__container">
            <div>
              <span className="about-page__quote__quotation-mark">
                " &nbsp;
              </span>
              Find a group of people who challenge and inspire you, spend a lot
              of time with them, and it will change your life.
              <span className="about-page__quote__quotation-mark">
                &nbsp; "
              </span>
            </div>
            <div className="about-page__quote__author">- Amy Poehler</div>
          </div>
        </section>
        {/* TEAM Text */}
        <section className="about-page__section about-page__section-static">
          <div className="about-page__team__container">
            <div className="about-page__team__title">Team</div>
            <div className="about-page__team__text">
              {aboutContent.teamText}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AboutPage
