import React from 'react'
import './ToDoInput.scss'

import Button from '../Button'

const ToDoInput = (props) => {
  return (
    <div className="common-to-do-input">
      <input />
      <Button buttonStyle="primary">
        Add
      </Button>
    </div>
  )
}

export default ToDoInput
