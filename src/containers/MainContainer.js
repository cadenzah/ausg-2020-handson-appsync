import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PageWrapper from '../components/common/PageWrapper'
import ToDoWrapper from '../components/base/ToDoWrapper'
import Title from '../components/common/Title'
import ToDoInput from '../components/common/ToDoInput'
import ToDoList from '../components/common/ToDoList'

import * as appActions from '../redux/modules/app'

const MainContainer = (props) => {
  const { appActions, todoDesc, todoList } = props

  // get all todos when start-up
  useEffect(() => {
    appActions.getTodoList()
  }, [])
  
  // handle keyboard input for attribute with provided key
  const handleChangeInput = key => event => {
    appActions.changeInput({
      key, value: event.target.value
    })
  }

  const handleCreateTodo = (desc) => {
    appActions.createTodo(desc)
  }

  return (
    <PageWrapper>
      <ToDoWrapper>
        <Title>ToDoList</Title>
        <ToDoInput
          handleChangeInput={handleChangeInput}
          handleCreateTodo={handleCreateTodo}
          todoDesc={todoDesc}
        />
        <ToDoList
          todoList={todoList}
        />
      </ToDoWrapper>
    </PageWrapper>
  )
}

const mapStateToProps = ({ app }) => ({
  todoDesc: app.todoDesc,
  todoList: app.todoList,
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
