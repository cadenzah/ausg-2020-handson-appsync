import React from 'react'
import './ToDoWrapper.scss'

// ToDo content's wrapper's style
// shadow, background style, ...
const ToDoWrapper = (props) => {
  return (
    <div className="base-to-do-wrapper">
      {props.children}
    </div>
  )
}

export default ToDoWrapper
