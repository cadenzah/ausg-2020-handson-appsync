import React from 'react'
import './ToDoItem.scss'

import Button from '../Button'

const ToDoItem = (props) => {
  return (
    <div className="common-to-do-item">
      <div className="common-to-do-item-checkbox">
        <input type="checkbox" value={props.item.id} />
      </div>
      <div className="common-to-do-item-desc">
        <span>{props.item.desc}</span>
      </div>
      <Button buttonStyle="caution">Delete</Button>
    </div>
  )
}

export default ToDoItem
