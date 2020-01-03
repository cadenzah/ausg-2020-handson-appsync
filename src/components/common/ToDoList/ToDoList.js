import React from 'react'
import './ToDoList.scss'

import ToDoItem from '../ToDoItem'
import LoadingItem from '../utils/LoadingItem'

const ToDoList = (props) => {
  const { isLoading, todoList, handleUpdateTodo, handleDeleteTodo } = props

  // while loading data, display loading components
  if (isLoading === true) {
    const items = [
      { id: 1, desc: 'If you have something to do, don\'t be lazy!' },
      { id: 2, desc: 'If you have something to do, don\'t be lazy!' },
      { id: 3, desc: 'If you have something to do, don\'t be lazy!' },
    ]
    return (
      items.map(item => (<LoadingItem key={item.id} item={item} />))
    )
  }

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
        itemId={todo.id}
        key={todo.id}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    ))
  )
}

export default ToDoList
