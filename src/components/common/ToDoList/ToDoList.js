import React from 'react'
import './ToDoList.scss'

import tasks from '../../../utils/tasks'

import ToDoItem from '../ToDoItem'

const ToDoList = (props) => {
  
  // first, sort tasks to be displayed
  const tasksInOrder = [
    ...tasks.filter(task => task.status !== 'DONE'),
    ...tasks.filter(task => task.status === 'DONE'),
  ]

  return (
    tasksInOrder.map((task) => (
      <ToDoItem
        item={task}
        key={task.id}
      />
    ))
  )
}

export default ToDoList
