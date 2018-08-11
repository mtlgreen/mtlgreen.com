import React, { Component } from 'react'
import CommonPageHeadTitle from '../../components/CommonPageHeadTitle/CommonPageHeadTitle'

import './join.scss'

class JoinPage extends Component {
  render() {
    return (
      <div>
        <CommonPageHeadTitle titleText={'Join the Impact!'} />
        <div className="join-page__body__container">Join</div>
      </div>
    )
  }
}

export default JoinPage
