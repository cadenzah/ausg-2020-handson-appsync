import React from 'react'
import './ToDoInput.scss'

import Button from '../Button'

const ToDoInput = (props) => {
  const { taskDesc, handleChangeInput } = props

  return (
    <div className="common-to-do-input">
      <input
        value={taskDesc}
        placeholder="Type in a new task to do!"
        onChange={handleChangeInput('taskDesc')}
      />
      <Button buttonStyle="primary">
        Add
      </Button>
    </div>
  )
}

export default ToDoInput
