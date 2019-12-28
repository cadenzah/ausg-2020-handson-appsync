import React from 'react'
import './ToDoList.scss'

import tasks from '../../../utils/tasks'

import ToDoItem from '../ToDoItem'

const ToDoList = (props) => {
  return (
    tasks.map((task) => (
      <ToDoItem item={task} />
    ))
  )
}

export default ToDoList
