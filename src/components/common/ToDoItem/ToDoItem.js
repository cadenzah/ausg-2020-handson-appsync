import React from 'react'
import './ToDoItem.scss'

import Button from '../Button'

const ToDoItem = (props) => {
  const { item, handleUpdateTodo, handleDeleteTodo } = props

  const onClickCheckbox = (e) => {
    // e.preventDefault()
    handleUpdateTodo(item.id, item.status)
  }

  return (
    <div className={item.status === 'PENDING'
      ? `common-to-do-item`
      : `common-to-do-item done`
    }>
      <div className="common-to-do-item-checkbox">
        <label htmlFor={item.id}>
          <input
            id={item.id}
            type="checkbox"
            value={item.id}
            checked={item.status === 'DONE' ? "checked" : ""}
            onChange={onClickCheckbox}
          />
          <span />
        </label>
      </div>
      <div className="common-to-do-item-desc">
        <span>{item.desc}</span>
      </div>
      <Button
        buttonStyle="caution"
        handleClick={() => handleDeleteTodo(item.id)}
      >
        Delete
      </Button>
    </div>
  )
}

export default ToDoItem
