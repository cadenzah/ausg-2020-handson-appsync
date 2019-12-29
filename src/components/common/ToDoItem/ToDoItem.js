import React from 'react'
import './ToDoItem.scss'

import Button from '../Button'

const ToDoItem = (props) => {
  const onClickCheckbox = (e) => {
    e.preventDefault()
    props.handleUpdateTodo(props.item.id, props.item.status)
  }

  return (
    <div className={props.item.status === 'PENDING'
      ? `common-to-do-item`
      : `common-to-do-item done`
    }>
      <div className="common-to-do-item-checkbox">
        <label htmlFor={props.item.id}>
          <input
            id={props.item.id}
            type="checkbox"
            value={props.item.id}
            checked={props.item.status === 'DONE' ? "checked" : ""}
            onChange={onClickCheckbox}
          />
          <span />
        </label>
      </div>
      <div className="common-to-do-item-desc">
      <span>{props.item.desc}</span>
      </div>
      <Button
        buttonStyle="caution"
        handleClick={() => props.handleDeleteTodo(props.item.id)}
      >
        Delete
      </Button>
    </div>
  )
}

export default ToDoItem
