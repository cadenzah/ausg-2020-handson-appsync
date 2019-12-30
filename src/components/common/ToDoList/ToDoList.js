import React from 'react'
import './ToDoList.scss'

import ToDoItem from '../ToDoItem'

const ToDoList = (props) => {
  const { todoList } = props
  
  // first, sort tasks to be displayed
  const todosInOrder = [
    ...todoList.filter(todo => todo.status !== 'DONE'),
    ...todoList.filter(todo => todo.status === 'DONE'),
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
