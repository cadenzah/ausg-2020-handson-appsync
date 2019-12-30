import React from 'react'
import './ToDoList.scss'

import ToDoItem from '../ToDoItem'

const ToDoList = (props) => {
  const { todoList, handleUpdateTodo, handleDeleteTodo } = props
  
  // first, sort tasks to be displayed
  if (todoList.length === 0) {
    return (<div>Just a moment...</div>)
  }

  const todosInOrder = [
    ...todoList.filter(todo => todo.status !== 'DONE'),
    ...todoList.filter(todo => todo.status === 'DONE'),
  ]

  return (
    todosInOrder.map((todo) => (
      <ToDoItem
        item={todo}
        itemId={todo.id}
        key={todo.id}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    ))
  )
}

export default ToDoList
