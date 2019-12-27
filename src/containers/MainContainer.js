import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import SimpleCounter from '../components/SimpleCounter'
import Article from '../components/common/templates/Article'

import * as appActions from '../redux/modules/app'

const MainContainer = (props) => {
  return (
    <Article>
      <h3>Hi, there!</h3>
      <p></p>
      <SimpleCounter
        increment={() => props.appActions.increment(1)}
        decrement={() => props.appActions.decrement(1)}
        value={props.value} />
      <br />
      <Link to="/about">Want to know about this page?</Link>
    </Article>
  )
}

const mapStateToProps = ({ app }) => ({
  value: app.value
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
