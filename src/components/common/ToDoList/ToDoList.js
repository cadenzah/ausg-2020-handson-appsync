import React from 'react'
import './ToDoList.scss'

import ToDoItem from '../ToDoItem'

const ToDoList = (props) => {
  const { todoList, handleUpdateTodo, handleDeleteTodo } = props
  
  // first, sort todos to be displayed
  // SORT CONDITION 1: status
  // SORT CONDITION 2: created time
  const todosInOrder = [
    ...todoList.filter(todo => todo.status !== 'DONE').sort((todo1, todo2) => todo2.date - todo1.date),
    ...todoList.filter(todo => todo.status === 'DONE').sort((todo1, todo2) => todo2.date - todo1.date),
  ]

  return (
    todosInOrder.map((todo) => (
      <ToDoItem
        item={todo}
        key={todo.id}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    ))
  )
}

export default ToDoList
