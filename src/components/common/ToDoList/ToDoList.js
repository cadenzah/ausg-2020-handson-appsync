import React from 'react'
import './ToDoList.scss'

import todos from '../../../utils/tasks'

import ToDoItem from '../ToDoItem'

const ToDoList = (props) => {
  
  // first, sort tasks to be displayed
  const todosInOrder = [
    ...todos.filter(todo => todo.status !== 'DONE'),
    ...todos.filter(todo => todo.status === 'DONE'),
  ]

  return (
    todosInOrder.map((todo) => (
      <ToDoItem
        item={todo}
        key={todo.id}
      />
    ))
  )
}

export default ToDoList
