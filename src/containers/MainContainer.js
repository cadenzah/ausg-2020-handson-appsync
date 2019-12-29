import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PageWrapper from '../components/common/PageWrapper'
import ToDoWrapper from '../components/base/ToDoWrapper'
import Title from '../components/common/Title'
import ToDoInput from '../components/common/ToDoInput'
import ToDoList from '../components/common/ToDoList'

import * as appActions from '../redux/modules/app'

const MainContainer = (props) => {
  
  // handle keyboard input for attribute with provided key
  const handleChangeInput = key => event => {
    props.appActions.changeInput({
      key, value: event.target.value
    })
  }

  return (
    <PageWrapper>
      <ToDoWrapper>
        <Title>ToDoList</Title>
        <ToDoInput
          handleChangeInput={handleChangeInput}
          taskDesc={props.taskDesc}
        />
        <ToDoList />
      </ToDoWrapper>
    </PageWrapper>
  )
}

const mapStateToProps = ({ app }) => ({
  taskDesc: app.taskDesc,
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
