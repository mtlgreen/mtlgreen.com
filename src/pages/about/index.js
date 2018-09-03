import React, { Component } from 'react'
import CommonPageHeadTitle from '../../components/CommonPageHeadTitle/CommonPageHeadTitle'
import * as aboutContent from '../../content/about/aboutBulkContent'

import './about.scss'

class AboutPage extends Component {
  render() {
    return (
      <div>
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
          <section className="about-page__section about-page__section-parallax about-page__main-activities__background" />
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
          <section className="about-page__section about-page__section-parallax about-page__objectives__background" />
          {/* OBJECTIVES Text */}
          <section className="about-page__section about-page__section-static">
            <div className="about-page__objectives__container">
              <div className="about-page__objectives__title">Objectives</div>
              <div className="about-page__objectives__text">
                {aboutContent.objectivesText}
              </div>
            </div>
          </section>
          {/* TEAM Background */}
          <section className="about-page__section about-page__section-parallax about-page__team__background" />
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
      </div>
    )
  }
}

export default AboutPage
